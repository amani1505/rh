import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from '@landing/components/shared/product-card/product-card.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CategoryComponent } from './components/category/category.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule, ProductCardComponent, CategoryComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  subCategory: string | undefined;
  myObject = {
    status: 'Active',
    title: 'Angular Tutorial',
    description: 'This is a tutorial about Angular components.',
  };

  onShowSubCategory(newCategory: string): void {
    console.log("Category",newCategory)
    this.subCategory = newCategory;
 
  }


}
