import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeaderComponent,HeroComponent,CategoryComponent,ProductComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
