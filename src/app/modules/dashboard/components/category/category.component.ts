import { Component } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { CategoryInterface } from '@model/category.interface';
import { Observable } from 'rxjs';
import { invoke_category_api } from 'app/store/category/category.action';
import { select, Store } from '@ngrx/store';
import { select_categories } from 'app/store/category/category.selector';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, ItemComponent, TableModule, TagModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  category$: Observable<CategoryInterface[]> | null = null;
  openedCategoryId: string | null = null;

  constructor(private _store: Store) {}

  ngOnInit() {
    this._store.dispatch(invoke_category_api());
    this.category$ = this._store.pipe(select(select_categories));
  }

  onToggleSubcategory(categoryId: string) {
    console.log('Category', categoryId);
    this.openedCategoryId =
      this.openedCategoryId === categoryId ? null : categoryId;
  }
}
