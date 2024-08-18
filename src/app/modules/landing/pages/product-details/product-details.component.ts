import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: { url: string }[];
}

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  currentIndex: number = 0;
  quatity: number = 0;
  available: number = 12;
  animationClass: string = '';
  colors: string[] = ['#FF5722', '#F44336', '#4CAF50', '#2196F3']; // Define colors here
  selectedColor: string = this.colors[0];
  icons: string[] = [
    './assets/icons/ionicons/logo-facebook.svg',
    './assets/icons/ionicons/logo-twitter.svg',
    '/assets/icons/ionicons/logo-instagram.svg',
    './assets/icons/ionicons/logo-linkedin.svg',
  ];
  product: Product = {
    id: 1,
    name: 'Product Name',
    description: 'Product description goes here.',
    price: 99.99,
    images: [
      { url: '../../../../../assets/images/products/jacket-3.jpg' },
      { url: '../../../../../assets/images/products/jacket-4.jpg' },
      { url: '../../../../../assets/images/products/shirt-1.jpg' },
      // Add more images as needed
    ],
  };

  selectedImage: { url: string } | null = null;

  constructor() {}

  ngOnInit(): void {
    this.selectedImage = this.product.images[0];
  }

  selectImage(image: { url: string }): void {
    const newIndex = this.product.images.indexOf(image);

    if (newIndex === this.currentIndex) {
      return;
    }

    if (newIndex > this.currentIndex) {
      this.animationClass = 'animate-slideLeft';
    } else {
      this.animationClass = 'animate-slideRight';
    }

    this.currentIndex = newIndex;
    this.selectedImage = image;

    setTimeout(() => {
      this.animationClass = '';
    }, 500);
  }
  selectColor(color: string): void {
    this.selectedColor = color;
  }
  add() {
    if (this.available > this.quatity) {
      ++this.quatity;
    }
  }
  decrease() {
    if (this.quatity > 0) {
      --this.quatity;
    }
  }
}
