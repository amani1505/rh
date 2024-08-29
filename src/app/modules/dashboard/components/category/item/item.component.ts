import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryInterface } from '@model/category.interface';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { environment } from 'environments/environment';
import { NgIf } from '@angular/common';

@Component({
  selector: '[cartegory-table-item]',
  standalone: true,
  imports: [AngularSvgIconModule, NgIf],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  api_url = environment.staicUrl;
  @Input() category = <CategoryInterface>{};
  @Input() openedCategoryId: string | null = null;
  @Output() toggleMenu = new EventEmitter<string>();

  onClick() {
    this.toggleMenu.emit(this.category.id);
    console.log('IT works', this.openedCategoryId);
  }
}
