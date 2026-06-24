import { Component, OnInit, OnDestroy, signal, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./hero.html"
})
export class HeroComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);

  roles = ['Frontend Architecture', 'Enterprise Apps', 'UI Engineering', 'Component Libraries'];
  currentRoleIndex = 0;
  currentRole = signal('');
  private roleTimer: any;
  isAnimating = false;

  techBadges = [
    { name: 'Angular', delay: '0s' },
    { name: 'React', delay: '0.5s' },
    { name: 'TypeScript', delay: '1s' },
    { name: 'RxJS', delay: '1.5s' },
    { name: 'SCSS', delay: '2s' },
  ];

  metrics = [
    { value: '1.5+', label: 'Years Exp.' },
    { value: '80+', label: 'Components' },
    { value: '3+', label: 'Enterprise' },
    { value: '10K+', label: 'Dev Hours' },
    { value: '2x', label: 'Merit Increments' },
  ];

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.currentRole.set(this.roles[0]);
      this.isAnimating = true;
      this.startTypewriter();
    }
  }

  private startTypewriter() {
    this.roleTimer = setInterval(() => {

      this.isAnimating = false;

      setTimeout(() => {
        this.currentRoleIndex =
          (this.currentRoleIndex + 1) % this.roles.length;

        this.currentRole.set(this.roles[this.currentRoleIndex]);

        // Force reflow before re-adding class
        requestAnimationFrame(() => {
          this.isAnimating = true;
        });

      }, 300);

    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.roleTimer);
  }

  scrollToAbout(event: Event) {
    event.preventDefault();

    const about = document.getElementById('about');
    console.log(about);

    about?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
