import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  theme = signal<Theme>('dark');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('mb-theme') as Theme;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.theme.set(saved || (prefersDark ? 'dark' : 'light'));

      effect(() => {
        const t = this.theme();
        document.documentElement.setAttribute('data-theme', t);
        localStorage.setItem('mb-theme', t);
      });
    }
  }

  toggleTheme() {
    this.theme.update(t => t === 'dark' ? 'light' : 'dark');
  }
}
