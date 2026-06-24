import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html'
})
export class ServicesComponent {
  services = [
    {
      icon: 'fa-solid fa-code',
      iconBg: 'rgba(99,102,241,0.1)',
      iconColor: '#6366F1',
      title: 'Frontend Development',
      description: 'Develop scalable and high-performance web applications using Angular, React, and modern JavaScript frameworks while ensuring responsiveness and seamless user experience.',
      features: ['Angular & React Applications', 'Responsive UI Development', 'Performance Optimization', 'REST API Integration'],
    },
    {
      icon: 'fa-solid fa-cubes',
      iconBg: 'rgba(6,182,212,0.1)',
      iconColor: '#06B6D4',
      title: 'Component & Library Development',
      description: 'Design and build reusable UI component libraries from scratch, enabling faster development, consistency, and scalable frontend architecture.',
      features: ['Custom UI Component Libraries', '80+ Reusable Components', 'Design System Implementation', 'Documentation & Storybook'],
    },
    {
      icon: 'fa-solid fa-chart-column',
      iconBg: 'rgba(16,185,129,0.1)',
      iconColor: '#10B981',
      title: 'Data Visualization & Integration',
      description: 'Build custom charting solutions and integrate REST APIs, handling complex data flows to deliver dynamic and interactive user interfaces.',
      features: ['HTML Canvas Chart Library', 'Chart.js Integration', 'Complex Data Rendering', 'API Data Visualization'],
    },
    {
      icon: 'fa-solid fa-brain',
      iconBg: 'rgba(245,158,11,0.1)',
      iconColor: '#F59E0B',
      title: 'AI & Automation',
      description: 'Leverage LLM-powered solutions to automate frontend workflows, generate dynamic configurations, and improve developer productivity.',
      features: ['ChatGPT API Integration', 'Chart Config Generation', 'Workflow Automation', 'Prompt Engineering'],
    },
  ];

  processSteps = [
    { icon: 'fa-solid fa-magnifying-glass', label: 'Discover', desc: 'Understand requirements' },
    { icon: 'fa-solid fa-pencil-ruler', label: 'Design', desc: 'Plan architecture' },
    { icon: 'fa-solid fa-terminal', label: 'Develop', desc: 'Build & test' },
    { icon: 'fa-solid fa-rocket', label: 'Deliver', desc: 'Deploy & iterate' },
  ];
}
