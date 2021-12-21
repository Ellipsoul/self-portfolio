import { Component, OnInit } from '@angular/core';

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
  projects: Project[];

  constructor() {
    this.projects = [
      {
        name: 'Project 1',
        description: 'A project description',
        github_url: 'https://random-url.com',
        demo_url: 'https://random-url.com',
        image_link: '../../assets/images/project1.png',
      },
      {
        name: 'Project 2',
        description: 'A project description',
        github_url: 'https://random-url.com',
        demo_url: 'https://random-url.com',
        image_link: '../../assets/images/project2.png',
      },
      {
        name: 'Project 3',
        description: 'A project description',
        github_url: 'https://random-url.com',
        demo_url: 'https://random-url.com',
        image_link: '../../assets/images/project3.png',
      },
      {
        name: 'Project 4',
        description: 'A project description',
        github_url: 'https://random-url.com',
        demo_url: 'https://random-url.com',
        image_link: '../../assets/images/project4.png',
      },
      {
        name: 'Project 5',
        description: 'A project description',
        github_url: 'https://random-url.com',
        demo_url: 'https://random-url.com',
        image_link: '../../assets/images/project5.png',
      },
      {
        name: 'Project 6',
        description: 'A project description',
        github_url: 'https://random-url.com',
        demo_url: 'https://random-url.com',
        image_link: '../../assets/images/project6.png',
      },
    ];
  };

  ngOnInit(): void {

  }
}
