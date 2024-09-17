import { Component, Output, EventEmitter } from '@angular/core';
import { ItemComponent } from './item/item.component';
import {
  CategoryInterface,
  CategoryItemInterface,
} from '@model/category.interface';
import { Observable } from 'rxjs';
import { invoke_category_api } from 'app/store/category/category.action';
import { select, Store } from '@ngrx/store';
import { select_categories } from 'app/store/category/category.selector';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddNewComponent } from './add-new/add-new.component';
import { ImageUploaderComponent } from '../shared/image-uploader/image-uploader.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    CommonModule,
    ItemComponent,
    MatDialogModule,
    ImageUploaderComponent,
    NgxPaginationModule,
    AddNewComponent
],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  @Output() createProduct:boolean = false;
  categories$: Observable<CategoryItemInterface[]> = new Observable();
  responsive: boolean = true;
  autoHide: boolean = true;
  loading: boolean = true;
  nextLabel: string = '';
  previousLabel: string = '';
  maxSize: number = 7;
  page: number = 1;
  total: number = 10;

  constructor(
    private _store: Store,
    private _dialog: MatDialog,
  ) {}

  ngOnInit() {
    this._store.dispatch(invoke_category_api({ page: this.page }));
    this.categories$ = this._store.pipe(
      select(select_categories),
      map((category: CategoryInterface) => category?.data ?? []),
    );

    this._store.pipe(select(select_categories)).subscribe((response) => {
      this.total = response.total_items;
      console.log('Current State', response);
      this.page = response.current_page;
    });
  }
  openDialog(opened:boolean) {

    console.log("::Opened 2",opened)
    this.createProduct = opened;
    // this._dialog.open(AddNewComponent, {
    //   width: '90%',
    //   disableClose: false,
    // });
  }

  handleSidebarClose() {
    this.createProduct = false; // Handle sidebar close event
  }
  getPage(page: number) {
    console.log('Page', page);
    this._store.dispatch(invoke_category_api({ page: page }));
  }
  onImageSelected(file: File) {
    console.log('Selected file:', file);
    // Handle the uploaded file as needed
  }
}
