import { Component } from '@angular/core';
import { HeaderTopComponent } from '../header-top/header-top.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderTopComponent, NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: '../../landing.component.scss'
})
export class HeaderComponent {

}
