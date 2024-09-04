import { Component } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { CategoryInterface } from '@model/category.interface';
import { Observable } from 'rxjs';
import { invoke_category_api } from 'app/store/category/category.action';
import { select, Store } from '@ngrx/store';
import { select_categories } from 'app/store/category/category.selector';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddNewComponent } from './add-new/add-new.component';
import { ImageUploaderComponent } from '../shared/image-uploader/image-uploader.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, ItemComponent, MatDialogModule,ImageUploaderComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  category$: Observable<CategoryInterface[]> | null = null;

  constructor(
    private _store: Store,
    private _dialog: MatDialog,
  ) {}

  ngOnInit() {
    this._store.dispatch(invoke_category_api());
    this.category$ = this._store.pipe(select(select_categories));
  }
  openDialog() {
    this._dialog.open(AddNewComponent, {
      width: "90%",
      disableClose: false,
    });
  }
  onImageSelected(file: File) {
    console.log('Selected file:', file);
    // Handle the uploaded file as needed
  }

}
