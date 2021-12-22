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

  applyTheme() {
    return this.themeService.getTheme();
  }

  toggleTheme():void {
    this.themeService.toggleTheme();
  }
}
