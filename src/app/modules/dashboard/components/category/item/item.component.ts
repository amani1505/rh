import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CategoryItemInterface } from '@model/category.interface';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { environment } from 'environments/environment';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: '[cartegory-table-item]',
  standalone: true,
  imports: [
    AngularSvgIconModule,
    NgIf,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent {
  api_url = environment.staicUrl;
  @Input() category: CategoryItemInterface = {} as CategoryItemInterface;
  @Input() openedCategoryId: string | null = null;
  @Output() toggleMenu = new EventEmitter<string>();
  constructor() {}

  // onClick() {
  //   this.toggleMenu.emit(this.category.id);
  //   console.log('IT works', this.openedCategoryId);
  // }
}
