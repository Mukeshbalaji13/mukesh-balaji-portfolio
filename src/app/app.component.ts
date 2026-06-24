import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, inject, PLATFORM_ID, Renderer2, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './components/about/about';
import { ThemeService } from './core/services/theme.service';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { SkillsComponent } from './components/skills/skills';
import { ServicesComponent } from './components/services/services';
import { ExperienceComponent } from './components/experience/experience';
import { ProjectsComponent } from './components/projects/projects';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HeroComponent, AboutComponent, SkillsComponent, ServicesComponent, ExperienceComponent, ProjectsComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  private platformId = inject(PLATFORM_ID);
  private themeService = inject(ThemeService);

  isLoading = signal(true);
  scrollProgress = signal(0);
  cursorX = signal(0);
  cursorY = signal(0);
  theme = this.themeService.theme;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Loading screen
      setTimeout(() => this.isLoading.set(false), 1800);

      // AOS initialization
      setTimeout(() => {
        if ((window as any).AOS) {
          (window as any).AOS.init({
            duration: 700,
            easing: 'ease-out-cubic',
            once: true,
            offset: 80
          });
        }
      }, 200);
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      this.scrollProgress.set((scrollTop / docHeight) * 100);
    }
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.cursorX.set(event.clientX);
    this.cursorY.set(event.clientY);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
