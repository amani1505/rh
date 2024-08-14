import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductBoxComponent } from './product-box/product-box.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [SidebarComponent,ProductBoxComponent],
  templateUrl: './product.component.html',
  styleUrl: '../../landing.component.scss'
})
export class ProductComponent {

}
