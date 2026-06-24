import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  name: string;
  industry: string;
  industryIcon: string;
  description: string;
  problem: string;
  contributions: string[];
  technologies: string[];
  impact: string[];
  status: string;
  gradient: string;
  category: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html'
})
export class ProjectsComponent {
  activeFilter = signal('all');
  activeProject = signal<Project | null>(null);

  filters = [
    { label: 'All Projects', value: 'all', count: 6 },
    { label: 'Libraries', value: 'library', count: 2 },
    { label: 'AI & Automation', value: 'ai', count: 1 },
    { label: 'Enterprise Applications', value: 'application', count: 3 },
  ];

  projects: Project[] = [
    {
      name: 'Enterprise UI Component Library',
      industry: 'Frontend Infrastructure',
      industryIcon: 'fa-solid fa-cubes',
      description: 'A scalable Angular UI component library developed to standardize user interfaces, accelerate development, and ensure design consistency across multiple enterprise applications.',
      problem: 'Development teams were independently implementing similar UI components and relying on various third-party libraries, leading to duplicated effort, inconsistent user experiences, and increased maintenance overhead. A centralized component ecosystem was needed to improve scalability, consistency, and development efficiency.',
      contributions: [
        'Designed and developed 80+ reusable Angular components following scalable architecture principles',
        'Implemented a flexible theming system using CSS custom properties to support application-wide branding and customization',
        'Built configurable components with extensive customization options while maintaining consistency and accessibility',
        'Created comprehensive documentation, usage guidelines, and API references to improve developer adoption',
        'Established testing and quality assurance strategies to ensure component reliability and maintainability',
        'Served as the primary owner and maintainer of the component library, driving enhancements, bug fixes, and long-term evolution'
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'HTML5',
        'SCSS',
        'CSS Variables',
        'RxJS',
        'Storybook',
        'Git'
      ],
      impact: [
        'Delivered 80+ reusable production-ready components',
        'Accelerated frontend development through shared UI infrastructure',
        'Improved consistency across multiple enterprise applications'
      ],
      status: 'Enterprise Project',
      gradient: 'linear-gradient(135deg, #312e81 0%, #4c1d95 50%, #701a75 100%)',
      category: 'library'
    },
    {
      name: 'Custom HTML Canvas Charting Library',
      industry: 'Data Visualization',
      industryIcon: 'fa-solid fa-chart-column',
      description: 'A high-performance charting library built from scratch using the HTML Canvas API, enabling advanced data visualizations, custom interactions, and flexible configuration for enterprise analytics dashboards.',
      problem: 'Existing charting solutions lacked the flexibility and performance required for complex enterprise reporting and visualization needs. A custom rendering engine was needed to support advanced chart types, interactive features, extensive customization, and large-scale datasets.',
      contributions: [
        'Designed and developed a custom chart rendering engine from scratch using the HTML Canvas API',
        'Implemented 15+ chart types, including composite and highly customizable visualizations',
        'Built a flexible configuration-driven architecture to simplify chart creation and customization',
        'Optimized rendering performance for large datasets and real-time updates',
        'Designed and implemented advanced chart visualizations and interactive features beyond the capabilities required by existing charting solutions',
        'Created reusable chart components and APIs for seamless integration across enterprise applications',
        'Served as the primary owner and maintainer of the charting library, driving new feature development, performance improvements, and long-term evolution'
      ],
      technologies: [
        'HTML Canvas',
        'TypeScript',
        'Angular',
        'JavaScript',
        'CSS Animations'
      ],
      impact: [
        'Delivered 15+ customizable chart types',
        'Enabled advanced enterprise data visualization capabilities',
        'Reduced dependency on third-party charting libraries through a fully custom solution'
      ],
      status: 'Enterprise Project',
      gradient: 'linear-gradient(135deg, #164e63 0%, #155e75 50%, #0f766e 100%)',
      category: 'library'
    },
    {
      name: 'LLM-Powered Chart Configuration Generator',
      industry: 'AI Automation',
      industryIcon: 'fa-solid fa-brain',
      description: 'An AI-powered automation platform that leverages the ChatGPT API to analyze chart images and generate complete chart configuration objects, significantly reducing manual development effort and accelerating dashboard creation.',
      problem: 'Developers were spending considerable time manually translating chart designs and mockups into complex configuration objects. An intelligent solution was needed to interpret visual designs and automatically generate accurate, production-ready chart configurations.',
      contributions: [
        'Integrated the ChatGPT API to analyze chart images and generate structured chart configuration objects',
        'Designed and refined prompt engineering strategies to maximize configuration accuracy and consistency',
        'Developed an Angular-based workflow for image upload, AI processing, configuration generation, and live chart preview',
        'Implemented validation mechanisms and manual override capabilities to ensure reliability and user control',
        'Optimized AI-generated outputs to align with the custom charting library architecture and configuration standards',
        'Collaborated with stakeholders to streamline chart creation workflows and improve developer productivity'
      ],
      technologies: [
        'OpenAI API',
        'Angular',
        'TypeScript',
        'REST APIs',
        'Prompt Engineering',
        'RxJS'
      ],
      impact: [
        'Significantly reduced manual chart configuration effort',
        'Accelerated dashboard development workflows through AI-driven automation',
        'Improved consistency and accuracy of chart implementations'
      ],
      status: 'Enterprise Project',
      gradient: 'linear-gradient(135deg, #7c2d12 0%, #c2410c 50%, #ea580c 100%)',
      category: 'ai'
    },
    {
      name: 'WIOA - US Government Workforce Management Platform',
      industry: 'Government',
      industryIcon: 'fa-solid fa-landmark',
      description: 'Enterprise workforce management platform developed for a US Government agency, supporting workforce administration, program management, compliance reporting, and operational efficiency across multiple departments.',
      problem: 'The application required a scalable frontend architecture capable of handling complex business workflows, large datasets, and stringent government requirements for accessibility, performance, and security.',
      contributions: [
        'Designed and developed scalable Angular feature modules using lazy loading and modular architecture principles',
        'Integrated and optimized REST API communication with advanced RxJS patterns for efficient state and data management',
        'Built responsive and accessible user interfaces aligned with WCAG 2.1 AA standards',
        'Developed reusable form and UI components to improve development consistency and maintainability',
        'Collaborated with cross-functional teams to deliver enterprise-grade features within agile development cycles'
      ],
      technologies: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'PrimeNG', 'PrimeFlex', 'REST APIs', 'Git'],
      impact: [
        'Enabled scalable workforce management operations across multiple departments',
        'Achieved WCAG 2.1 AA accessibility compliance',
        'Improved frontend maintainability through reusable architecture and shared components'
      ],
      status: 'Enterprise Project',
      gradient: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
      category: 'application',
    },
    {
      name: 'CareerStart.ai - US Government Career Development Platform',
      industry: 'Government',
      industryIcon: 'fa-solid fa-landmark',
      description: 'A US Government career development and workforce readiness platform designed to help students and job seekers explore career pathways, build skills, and access personalized guidance through interactive digital experiences.',
      problem: 'The platform required scalable frontend architecture capable of supporting evolving business requirements, complex user workflows, and modern Angular best practices while maintaining performance, accessibility, and long-term maintainability.',
      contributions: [
        'Migrated legacy Angular patterns to Angular Signals, improving reactivity, maintainability, and developer experience',
        'Developed scalable Angular feature modules following modular architecture principles',
        'Integrated REST APIs and optimized data flows using RxJS for efficient state and asynchronous data management',
        'Built responsive and accessible user interfaces aligned with modern frontend standards',
        'Developed reusable UI and form components to improve consistency across the platform',
        'Collaborated with cross-functional teams to deliver enterprise-grade features in an agile development environment'
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'Angular Signals',
        'RxJS',
        'SCSS',
        'PrimeNG',
        'REST APIs',
        'Git'
      ],
      impact: [
        'Improved frontend maintainability through Angular modernization initiatives',
        'Enhanced application responsiveness using Angular Signals',
        'Delivered scalable user experiences supporting career exploration and workforce readiness'
      ],
      status: 'Enterprise Project',
      gradient: 'linear-gradient(135deg, #14532d 0%, #166534 50%, #22c55e 100%)',
      category: 'application'
    },
    {
      name: 'NJ Kids - US Government Child Support System',
      industry: 'Government',
      industryIcon: 'fa-solid fa-landmark',
      description: 'A US Government child support management platform designed to streamline case administration, child support enforcement, custodial and non-custodial parent payment processing, compliance tracking, and communication workflows for families and state agencies.',
      problem: 'The application required a scalable and secure frontend architecture capable of handling complex case-management workflows, large volumes of sensitive data, and strict government requirements for accessibility, performance, and reliability.',
      contributions: [
        'Developed scalable Angular modules supporting complex child support and case-management workflows',
        'Integrated REST APIs and optimized frontend data handling using RxJS',
        'Built responsive and accessible user interfaces aligned with government accessibility standards',
        'Developed reusable forms and UI components to improve consistency and reduce development effort',
        'Implemented validation and workflow-driven interfaces for data-intensive business processes',
        'Collaborated with cross-functional teams to deliver enterprise-grade functionality within agile development cycles'
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'RxJS',
        'SCSS',
        'PrimeNG',
        'PrimeFlex',
        'REST APIs',
        'Git'
      ],
      impact: [
        'Supported complex child support case-management operations',
        'Improved frontend consistency through reusable architecture and shared components',
        'Delivered accessible and maintainable user experiences for government stakeholders'
      ],
      status: 'Enterprise Project',
      gradient: 'linear-gradient(135deg, #9f1239 0%, #be185d 50%, #ec4899 100%)',
      category: 'application'
    }
  ];

  filteredProjects = () => {
    const f = this.activeFilter();
    return f === 'all' ? this.projects : this.projects.filter(p => p.category === f);
  };

  setFilter(value: string) {
    this.activeFilter.set(value);
  }

  openModal(project: Project) {
    this.activeProject.set(project);
    document.body.style.overflow = 'hidden';
  }
  closeModal() {
    this.activeProject.set(null);
    document.body.style.overflow = '';
  }
}
