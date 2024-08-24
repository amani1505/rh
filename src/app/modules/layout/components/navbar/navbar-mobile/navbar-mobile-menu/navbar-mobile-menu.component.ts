import { NgFor, NgClass, NgTemplateOutlet, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NavbarMobileSubmenuComponent } from '../navbar-mobile-submenu/navbar-mobile-submenu.component';
import { MenuService } from '@layout/services/menu.service';
import { SubMenuItem } from '@models/menu.model';

@Component({
  selector: 'app-navbar-mobile-menu',
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    AngularSvgIconModule,
    NgTemplateOutlet,
    RouterLink,
    RouterLinkActive,
    NgIf,
    NavbarMobileSubmenuComponent,
  ],
  templateUrl: './navbar-mobile-menu.component.html',
  styleUrl: './navbar-mobile-menu.component.scss',
})
export class NavbarMobileMenuComponent implements OnInit {
  constructor(public menuService: MenuService) {}

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }

  public closeMenu() {
    this.menuService.showMobileMenu = false;
  }

  ngOnInit(): void {}
}
