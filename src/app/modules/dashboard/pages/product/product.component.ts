import { Component } from '@angular/core';
import { ProductsComponent } from '@dashboard/components/product/products/products.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductsComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

}
