import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent {
  isDark: boolean = true;

  onThemeSwitch() {
    document.body.classList.toggle("is-light")
    this.isDark = !this.isDark
  }
}
