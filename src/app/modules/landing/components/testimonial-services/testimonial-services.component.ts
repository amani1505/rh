import { Component } from '@angular/core';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ServicesComponent } from './services/services.component';
import { CtaComponent } from './cta/cta.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-testimonial-services',
  standalone: true,
  imports: [AngularSvgIconModule,TestimonialComponent,ServicesComponent,CtaComponent],
  templateUrl: './testimonial-services.component.html',
  styleUrl: '../../landing.component.scss'
})
export class TestimonialServicesComponent {

}
