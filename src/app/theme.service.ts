import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // Create a service that tracks the theme and can be used by other components.
  // The theme is stored in local storage.
  // The theme is set to 'light' by default.
  // The theme can be changed by calling the setTheme() method.
  constructor() {
  }

  setTheme(theme: string): void {
    localStorage.setItem('theme', theme);
  }

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
