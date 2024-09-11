import { Component, OnInit } from '@angular/core';
import { Customer } from './domain/customer';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CategoryInterface } from '@model/category.interface';
import { select_categories } from 'app/store/category/category.selector';
import { invoke_category_api } from 'app/store/category/category.action';
import { CategoryComponent } from '@dashboard/components/category/category.component';

@Component({
  selector: 'app-product-category',
  standalone: true,
  imports: [CategoryComponent],
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.scss',
})
export class ProductCategoryComponent implements OnInit {
  customers!: Customer[];
  category$: Observable<CategoryInterface> | null = null;
  page: number = 1;

  constructor(private _store: Store) {}

  ngOnInit() {
    // this._store.dispatch(invoke_category_api({ page: this.page }));
    // this.category$ = this._store.pipe(select(select_categories));
  }
}
