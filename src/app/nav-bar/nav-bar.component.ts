import { Component, OnInit } from '@angular/core';

import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  theme: string;

  constructor(private themeService: ThemeService) {
    this.theme = this.themeService.getTheme();
  }

  ngOnInit(): void {}

  applyTheme() {
    return this.themeService.getTheme();
  }

  toggleTheme():void {
    this.themeService.toggleTheme();
    this.theme = this.themeService.getTheme();
  }
}
