import { Injectable } from '@angular/core';

// Coding project interface
export interface Project {
  name: string;
  description: string;
  github_url: string;
  demo_url: string;
  image_link: string;
}

// Hard coded project information
export const PROJECTS:Project[] = [
  {
    name: 'NanoNote',
    description: 'A responsive and lightweight sticky notes application',
    github_url: 'https://github.com/Ellipsoul/notetaking-app',
    demo_url: 'https://nanonote.aronteh.com/',
    image_link: '../assets/project_images/nanonote.png',
  },
  {
    name: 'TurboFile',
    description: 'A convenient file-sharing application',
    github_url: 'https://github.com/Ellipsoul/file-sharing-app',
    demo_url: 'https://turbofile.aronteh.com/',
    image_link: '../assets/project_images/turbofile.png',
  },
  {
    name: 'Online Chat App',
    description: 'A single-room chat app built with React',
    github_url: 'https://github.com/Ellipsoul/online-chat-app',
    demo_url: 'https://ellipsoul.github.io/online-chat-app/',
    image_link: '/assets/project_images/chatapp.png',
  },
  {
    name: 'Travelling Salesman Problem Visualiser',
    description: 'Exactly what it sounds like. My first ever coding project',
    github_url: 'https://github.com/Ellipsoul/Travelling-Salesman-Visualiser',
    demo_url: 'https://ellipsoul.github.io/Travelling-Salesman-Visualiser/',
    image_link: '/assets/project_images/tsv.png',
  },
  {
    name: 'Quiz App',
    description: 'A quiz built with Flutter and Firebase',
    github_url: 'https://github.com/Ellipsoul/flutter-quizapp',
    demo_url: 'https://quizapp.aronteh.com/',
    image_link: '/assets/project_images/quizapp.png',
  },
  {
    name: 'Better LinkTree Socials Site',
    description: 'Built for my good friend Sebii, an amazing music artist',
    github_url: 'https://github.com/Ellipsoul/sebii-portfolio',
    demo_url: 'https://sebii-portfolio.vercel.app/',
    image_link: '/assets/project_images/sebii.png',
  },
  {
    name: 'Tax Calculator',
    description: 'I wanted to compare taxes in 3 countries',
    github_url: 'https://github.com/Ellipsoul/tax-calculator-pwa',
    demo_url: 'https://taxcalculator.aronteh.com/',
    image_link: '/assets/project_images/tax.png',
  },
  {
    name: 'ADMM Solver',
    description: 'Built for my Masters thesis at Imperial College London',
    github_url: 'https://github.com/Ellipsoul/ADMM_Solver',
    demo_url: 'https://github.com/Ellipsoul/ADMM_Solver/blob/main/Parallel_ADMM_Aron_Teh.pdf',
    image_link: '/assets/project_images/admm.png',
  },
  {
    name: 'Blogging App (Deprecated)',
    description: 'Dev.to inspired online blogging site',
    github_url: 'https://github.com/Ellipsoul/nxtfirejs',
    demo_url: 'https://nxtfirejs.vercel.app/',
    image_link: '/assets/project_images/nextfire.png',
  },
  {
    name: 'Vorticity Streamfunction Visualiser',
    description: 'The 2D Navier Stokes Equations in action',
    github_url: 'https://github.com/Ellipsoul/vorticity_stream_function',
    demo_url: 'https://github.com/Ellipsoul/vorticity_stream_function/blob/master/ewt17_HPC_Assignment_Report.pdf',
    image_link: '/assets/project_images/vorticity.jpg',
  },
];

// Service provides theming functionality
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {
  }

  // Managing theme in local storage
  setTheme(theme: string): void {
    localStorage.setItem('theme', theme);
  }

  // Retrieve theme, or default to light
  getTheme(): string {
    const theme = localStorage.getItem('theme');
    if (theme === null) {
      this.setTheme('dark');
      return 'dark';
    } else {
      return theme;
    }
  }

  toggleTheme(): void {
    const theme = this.getTheme();
    if (theme === 'light') {
      this.setTheme('dark');
    } else {
      this.setTheme('light');
    }
  }

  isDarkTheme(): boolean {
    return this.getTheme() === 'dark';
  }

  isLightTheme(): boolean {
    return this.getTheme() === 'light';
  }
}
