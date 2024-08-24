import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { MenuService } from '@layout/services/menu.service';
import { ThemeService } from '@service/theme/theme.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    AngularSvgIconModule,
    SidebarMenuComponent,
    RouterLink,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  constructor(
    public themeService: ThemeService,
    public menuService: MenuService,
  ) {}

  ngOnInit(): void {}

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }

  toggleTheme() {
    this.themeService.theme = !this.themeService.isDark ? 'dark' : 'light';
  }
}
