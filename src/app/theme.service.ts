import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
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
