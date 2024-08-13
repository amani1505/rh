import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [AngularSvgIconModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: '../product.component.scss'
})
export class SidebarComponent {
  showMenu:boolean=false

}
