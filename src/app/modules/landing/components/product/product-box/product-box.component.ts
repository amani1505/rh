import { Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-product-box',
  standalone: true,
  imports: [AngularSvgIconModule],
  templateUrl: './product-box.component.html',
  styleUrl: '../../../landing.component.scss'
})
export class ProductBoxComponent {

}
