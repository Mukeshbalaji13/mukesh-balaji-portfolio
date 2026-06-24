import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html'
})
export class ExperienceComponent {
  selectedExp = 0;

  experiences = [
    {
      period: '2024 — Present',
      role: 'Software Engineer',
      company: 'Protechsoft Technologies Pvt. Ltd',
      location: 'Chennai, Tamil Nadu · Onsite',
      type: 'Full-time',
      logoIcon: 'fa-solid fa-briefcase',
      current: true,

      summary:
        'Frontend Engineer specializing in Angular and enterprise web applications, contributing to multiple US Government platforms while leading the development of reusable UI infrastructure, custom visualization frameworks, and AI-powered automation solutions.',

      highlights: [
        'Developed and maintained enterprise-scale Angular applications for US Government workforce, education, and child support platforms',
        'Architected and served as the primary owner of a custom Angular UI component library with 80+ reusable components',
        'Designed and developed a custom HTML Canvas charting library supporting advanced and highly configurable data visualizations',
        'Built an LLM-powered solution using the OpenAI API to generate chart configurations from images, improving developer productivity',
        'Migrated legacy Angular implementations to Angular Signals, improving application maintainability and reactivity',
        'Integrated REST APIs and optimized complex asynchronous workflows using RxJS',
        'Developed responsive and accessible interfaces aligned with enterprise and government accessibility standards',
        'Recognized for exceptional performance through multiple merit-based salary increments within a year',
        'Collaborated with cross-functional teams in agile environments to deliver scalable and maintainable frontend solutions'
      ],

      technologies: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'Angular Signals',
        'RxJS',
        'REST APIs',
        'HTML Canvas',
        'SCSS',
        'PrimeNG',
        'PrimeFlex',
        'Tailwind CSS',
        'OpenAI API',
        'Git'
      ]
    }
  ];
}
