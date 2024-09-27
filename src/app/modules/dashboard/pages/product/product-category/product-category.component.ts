import { Component } from '@angular/core';
import { CategoryComponent } from '@dashboard/components/category/category.component';

@Component({
  selector: 'app-product-category',
  standalone: true,
  imports: [CategoryComponent],
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.scss',
})
export class ProductCategoryComponent {}
