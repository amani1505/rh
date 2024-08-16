import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AngularSvgIconModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: '../../landing.component.scss'
})
export class NavbarComponent {
  isMobileMenuActive: boolean = false;
  isMobileCategoryActive:boolean=false
  isOverlayActive:boolean =false
  menu:boolean = false
  showMenu:boolean=true

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
    this.isOverlayActive = !this.isOverlayActive
  }

  toggleCategoryMenu(){
    this.isMobileCategoryActive = !this.isMobileCategoryActive
    this.isOverlayActive = !this.isOverlayActive
  }

  toggleAccordion(category: any) {
    category.isOpen = !category.isOpen;
  }
 open(){
  this.menu = !this.menu
 }
}
