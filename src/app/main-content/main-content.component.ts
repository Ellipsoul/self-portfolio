import { Component, OnInit } from '@angular/core';

import { ThemeService } from '../theme.service';

interface Project {
  name: string;
  description: string;
  github_url: string;
  demo_url: string;
  image_link: string;
}

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent implements OnInit {
  theme: string;
  projects: Project[];

  constructor(private themeService: ThemeService) {
    this.theme = this.themeService.getTheme();

    this.projects = [
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
  };

  ngOnInit(): void {

  }
}
