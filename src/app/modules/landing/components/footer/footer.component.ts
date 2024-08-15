import { Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AngularSvgIconModule,],
  templateUrl: './footer.component.html',
  styleUrl: '../../landing.component.scss'
})
export class FooterComponent {

}
