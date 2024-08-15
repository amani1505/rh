import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,  AngularSvgIconModule,SidebarComponent,ProductBoxComponent],
  templateUrl: './product.component.html',
  styleUrl: '../../landing.component.scss'
})
export class ProductComponent {
  showMenu:boolean=false
}
