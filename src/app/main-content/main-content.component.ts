import { Component, OnInit } from '@angular/core';

import { ThemeService, Project, PROJECTS } from '../theme.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent implements OnInit {
  projects: Project[];

  constructor(private themeService: ThemeService) {
    this.projects = PROJECTS;
  };

  ngOnInit(): void {}

  applyTheme() {
    return this.themeService.getTheme();
  }
}
