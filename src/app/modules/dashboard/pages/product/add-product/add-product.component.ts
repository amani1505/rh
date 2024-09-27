import { Component } from '@angular/core';
import { AddNewProductComponent } from '@dashboard/components/product/add-new-product/add-new-product.component';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [AddNewProductComponent],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent {}
