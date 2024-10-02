import { Component } from '@angular/core';
import { ImageUploaderComponent } from '@components/image-uploader/image-uploader.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NormalSelectComponent } from '../../../../../components/form/select/normal-select/normal-select.component';

@Component({
  selector: 'app-add-new-product',
  standalone: true,
  imports: [
    ImageUploaderComponent,
    AngularSvgIconModule,
    NormalSelectComponent,
  ],
  templateUrl: './add-new-product.component.html',
  styleUrl: './add-new-product.component.scss',
})
export class AddNewProductComponent {}
