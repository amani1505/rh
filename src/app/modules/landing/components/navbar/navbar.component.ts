import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AngularSvgIconModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: '../header/header.component.scss'
})
export class NavbarComponent {
  isMobileMenuActive: boolean = false;
  menu:boolean = false

  categories = [
    {
      title: 'Categories',
      isOpen: false,
      items: ['Desktop', 'Laptop', 'Camera', 'Tablet', 'Headphone'],
      image: './assets/images/electronics-banner-1.jpg',
    },
    // Add more categories as needed
  ];

  toggleMobileMenu() {
    this.isMobileMenuActive = !this.isMobileMenuActive;
  }

  toggleAccordion(category: any) {
    category.isOpen = !category.isOpen;
  }
 open(){
  this.menu = !this.menu
 }
}
