import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Aron Teh - Portfolio';

  constructor(private themeService: ThemeService, private meta: Meta) {
    this.meta.addTag({ name: 'description', content: 'Portfolio website for Aron Teh' });
  }

  applyTheme() {
    return this.themeService.getTheme();
  }
}
