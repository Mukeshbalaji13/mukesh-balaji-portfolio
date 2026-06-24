import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  label: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html'
})
export class SkillsComponent {
  hoveredSkill: string | null = null;

  skillCategories: SkillCategory[] = [
    {
      label: 'Frontend Frameworks',
      icon: 'fa-solid fa-layer-group',
      skills: [
        { name: 'Angular', icon: 'assets/skills icons/angular.png' },
        { name: 'React', icon: 'assets/skills icons/react.png' },
        { name: 'TypeScript', icon: 'assets/skills icons/typescript.png' },
        { name: 'JavaScript', icon: 'assets/skills icons/javascript.png' },
      ]
    },
    {
      label: 'Styling & CSS',
      icon: 'fa-solid fa-palette',
      skills: [
        { name: 'HTML5', icon: 'assets/skills icons/html5.png' },
        { name: 'CSS3', icon: 'assets/skills icons/css3.png' },
        { name: 'SCSS / Sass', icon: 'assets/skills icons/scss.png' },
        { name: 'PrimeFlex', icon: 'assets/skills icons/primeflex.png' },
        { name: 'Tailwind CSS', icon: 'assets/skills icons/tailwind.png' },
      ]
    },
    {
      label: 'State & Data',
      icon: 'fa-solid fa-database',
      skills: [
        { name: 'RxJS', icon: 'assets/skills icons/rxjs.svg' },
        { name: 'Redux / NgRx', icon: 'assets/skills icons/redux.png' },
        { name: 'Git / GitHub', icon: 'assets/skills icons/git.webp' },
        { name: 'REST APIs', icon: '' },
      ]
    },
    {
      label: 'UI & Tools',
      icon: 'fa-solid fa-wrench',
      skills: [
        { name: 'PrimeNG', icon: 'assets/skills icons/primeng.png' },
        { name: 'Ant Design', icon: 'assets/skills icons/antdesign.svg' },
        { name: 'Chart.js', icon: 'assets/skills icons/chartjs.png' },
        { name: 'HTML Canvas', icon: '' },
        
      ]
    },
  ];

  marqueeTechs = [
    'Angular', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS',
    'Tailwind CSS', 'RxJS', 'Redux', 'PrimeNG', 'Ant Design', 'Chart.js',
    'HTML Canvas', 'REST APIs', 'Git', 'GitHub', 'ChatGPT API', 'Node.js',
  ];
}
