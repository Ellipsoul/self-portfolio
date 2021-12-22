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
    name: 'Project 1',
    description: 'A project description. What happens if its long?',
    github_url: 'https://random-url.com',
    demo_url: 'https://random-url.com',
    image_link: '../../assets/img.jpg',
  },
  {
    name: 'Project 2',
    description: 'A project description. What happens if its long?',
    github_url: 'https://random-url.com',
    demo_url: 'https://random-url.com',
    image_link: '../../assets/img.jpg',
  },
  {
    name: 'Project 3',
    description: 'A project description. What happens if its long?',
    github_url: 'https://random-url.com',
    demo_url: 'https://random-url.com',
    image_link: '../../assets/img.jpg',
  },
  {
    name: 'Project 4',
    description: 'A project description. What happens if its long?',
    github_url: 'https://random-url.com',
    demo_url: 'https://random-url.com',
    image_link: '../../assets/img.jpg',
  },
  {
    name: 'Project 5',
    description: 'A project description. What happens if its long?',
    github_url: 'https://random-url.com',
    demo_url: 'https://random-url.com',
    image_link: '../../assets/img.jpg',
  },
  {
    name: 'Project 6',
    description: 'A project description. What happens if its long?',
    github_url: 'https://random-url.com',
    demo_url: 'https://random-url.com',
    image_link: '../../assets/img.jpg',
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
      this.setTheme('light');
      return 'light';
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
