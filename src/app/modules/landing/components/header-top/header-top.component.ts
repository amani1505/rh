import { Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-header-top',
  standalone: true,
  imports: [AngularSvgIconModule],
  templateUrl: './header-top.component.html',
  styleUrl: '../header/header.component.scss',
})
export class HeaderTopComponent {
  icons: string[] = [
    './assets/icons/ionicons/logo-facebook.svg',
    './assets/icons/ionicons/logo-twitter.svg',
    '/assets/icons/ionicons/logo-instagram.svg',
    './assets/icons/ionicons/logo-linkedin.svg',
  ];
}
