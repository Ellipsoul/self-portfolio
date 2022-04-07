import { Component, OnInit } from '@angular/core';

import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  // Theme management
  applyTheme() {
    return this.themeService.getTheme();
  }

  toggleTheme():void {
    this.themeService.toggleTheme();
  }
}

// This comment was pushed to GitHub from 36,000 feet in the air!
