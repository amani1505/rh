import { Component } from '@angular/core';
import { ProductCardComponent } from '@landing/components/shared/product-card/product-card.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
