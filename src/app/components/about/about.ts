import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./about.html"
})
export class AboutComponent {
  achievements = [
    { icon: 'fa-solid fa-calendar-check', value: '1.5+', label: 'Years Experience' },
    { icon: 'fa-solid fa-cubes', value: '80+', label: 'UI Components' },
    { icon: 'fa-solid fa-building', value: '3+', label: 'Enterprise Apps' },
    { icon: 'fa-solid fa-chart-line', value: '10K+', label: 'Dev Hours' },
    { icon: 'fa-solid fa-award', value: '2x', label: 'Merit Increments' },
  ];

  timeline = [
    {
      year: '2023 — Present',
      role: 'Software Engineer',
      company: 'Enterprise Client · US Government Platform',
      description: 'Contributing to a US Government workforce platform, developing scalable Angular modules, integrating REST APIs, and delivering responsive, user-centric interfaces.',
      tags: ['Angular', 'TypeScript', 'RxJS', 'REST APIs'],
      current: true,
    }
  ];
}
