import { Component } from '@angular/core';
import { ImageUploaderComponent } from '@components/image-uploader/image-uploader.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-add-new-product',
  standalone: true,
  imports: [ImageUploaderComponent,AngularSvgIconModule],
  templateUrl: './add-new-product.component.html',
  styleUrl: './add-new-product.component.scss'
})
export class AddNewProductComponent {

}
