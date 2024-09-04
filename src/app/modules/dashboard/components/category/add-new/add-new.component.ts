import { Component, EventEmitter, HostListener } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ImageUploaderComponent } from '@dashboard/components/shared/image-uploader/image-uploader.component';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from '@model/app-state';
import { invoke_save_new_category_api } from 'app/store/category/category.action';
import { selectAppState } from 'app/shared/store/app.selector';
import { set_api_status } from 'app/shared/store/app.action';
import {
  NgToastModule,
  NgToastService,
  ToasterPosition,
} from 'ng-angular-popup';

@Component({
  selector: 'app-add-new',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    ImageUploaderComponent,
    ReactiveFormsModule,
    FormsModule,
    NgToastModule,
  ],
  providers: [NgToastService],
  templateUrl: './add-new.component.html',
  styleUrl: './add-new.component.scss',
})
export class AddNewComponent {
  image!: File;
  ToasterPosition = ToasterPosition;
  loading: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _dialogRef: MatDialogRef<AddNewComponent>,
    private _store: Store,
    private _appStore: Store<AppStateInterface>,
    private _toast: NgToastService,
  ) {}

  categoryForm = this._formBuilder.group({
    category_name: ['', Validators.required],
    description: ['', Validators.required],
  });
  onImageSelected(file: File) {
    this.image = file;
  }

  save() {
    if (this.categoryForm.invalid || !this.image) {
      this._toast.warning(
        'Please fill out the form and upload an image',
        'Warning',
      );
      return;
    }
    this.loading = true;
    const categoryFormValues = {
      ...this.categoryForm.value,
      category: this.image,
    };

    const categoryFormData = new FormData();

    for (const key in categoryFormValues) {
      if (categoryFormValues.hasOwnProperty(key)) {
        const value = (categoryFormValues as { [key: string]: any })[key];
        categoryFormData.append(key, value);
      }
    }
    this._store.dispatch(
      invoke_save_new_category_api({ new_category: categoryFormData }),
    );

    let apiStatus$ = this._appStore.pipe(select(selectAppState));
    apiStatus$.subscribe((appState) => {
      if (appState.api_status == 'success') {
        this._appStore.dispatch(
          set_api_status({
            api_status: { api_response_message: '', api_status: '' },
          }),
        );
        this.loading = false;
        this._toast.success('Data saved Successfull', 'DONE',5000);
      
      }
    });
    this.closeDialog();
  }
  closeDialog() {
    this._dialogRef.close();
  }
}
