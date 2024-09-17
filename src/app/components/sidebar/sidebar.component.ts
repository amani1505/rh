import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() isOpened: boolean = false;
  @Input() position: 'left' | 'right' = 'right';
  @Input() title: string = '';
  @Output() closeSidebar = new EventEmitter<void>();

  toggleDrawer() {
    this.isOpened = !this.isOpened;
    if (!this.isOpened) {
      this.closeSidebar.emit();
    }
  }
}
