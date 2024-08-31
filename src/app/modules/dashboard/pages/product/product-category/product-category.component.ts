import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { TagModule } from 'primeng/tag';
import { Customer } from './domain/customer';
import { select, Store, StoreModule } from '@ngrx/store';
import { category_reducer } from 'app/store/category/category.reducer';
import { Observable } from 'rxjs';
import { CategoryInterface } from '@model/category.interface';
import { select_categories } from 'app/store/category/category.selector';
import { invoke_category_api } from 'app/store/category/category.action';
import { CategoryComponent } from '@dashboard/components/category/category.component';

@Component({
  selector: 'app-product-category',
  standalone: true,
  imports: [ CategoryComponent],
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.scss',
})
export class ProductCategoryComponent implements OnInit {
  customers!: Customer[];
  category$: Observable<CategoryInterface[]> | null = null;

  constructor(private _store: Store) {}

  ngOnInit() {
    this._store.dispatch(invoke_category_api());
    this.category$ = this._store.pipe(select(select_categories));
  }
}
