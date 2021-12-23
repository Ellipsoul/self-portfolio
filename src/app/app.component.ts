import { Component } from '@angular/core';

import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Aron Teh - Portfolio';

  constructor(private themeService: ThemeService) {}

  applyTheme() {
    return this.themeService.getTheme();
  }
}
