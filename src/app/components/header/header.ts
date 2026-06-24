import { Component, Input, Output, EventEmitter, OnInit, HostListener, signal, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

interface NavItem {
  label: string;
  href: string;
  id: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
})
export class HeaderComponent implements OnInit {
  @Input() currentTheme: string = 'dark';
  @Output() themeToggle = new EventEmitter<void>();

  private platformId = inject(PLATFORM_ID);

  isScrolled = signal(false);
  mobileMenuOpen = signal(false);
  activeSection = signal('home');

  navItems: NavItem[] = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  setupIntersectionObserver() {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );
    sections.forEach(s => observer.observe(s));
  }

  scrollTo(id: string, event: Event) {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = this.mobileMenuOpen() ? 'hidden' : '';
    }
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }
}
