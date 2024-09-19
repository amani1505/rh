import { Component, Input, Output, EventEmitter } from '@angular/core';
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
import { HotToastService } from '@ngneat/hot-toast';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from '@components/sidebar/sidebar.component';
import { ButtonComponent } from '@components/button/button.component';

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
    MatSidenavModule,
    MatButtonModule,
    SidebarComponent,
    ButtonComponent
  ],
  providers: [NgToastService],
  templateUrl: './add-new.component.html',
  styleUrl: './add-new.component.scss',
})
export class AddNewComponent {
  image!: File;
  ToasterPosition = ToasterPosition;
  loading: boolean = false;
  @Input() isOpened: boolean = false;
  @Output() closeSidebar = new EventEmitter<void>();

  constructor(
    private _formBuilder: FormBuilder,
    private _store: Store,
    private _appStore: Store<AppStateInterface>,
    private _toast: NgToastService,
    private toast: HotToastService,
  ) {
    console.log(this.isOpened, '::Opened');
  }

  categoryForm = this._formBuilder.group({
    category_name: ['', Validators.required],
    description: ['', Validators.required],
  });
  onImageSelected(file: File) {
    this.image = file;
  }

  save() {
    if (this.categoryForm.invalid || !this.image) {
      this.toast.error('Please fill out the form and upload an image', {
        position: 'top-right',
        style: {
          borderLeft: '4px solid #fb7185',
          padding: '10px',
          color: '#e11d48',
          backgroundColor: '#ffe4e6',
          fontWeight:400,
          fontSize:'12px'
        },
      });
    
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
        this.toggleDrawer()
        this.toast.success('successfull saved!!', {
          position: 'top-right',
        });
      }
    });
  }
  // closeDialog() {
  //   this._dialogRef.close();
  // }

  toggleDrawer() {
    this.isOpened = !this.isOpened;
    if (!this.isOpened) {
      this.closeSidebar.emit(); // Emit event to parent component when closed
    }
  }
}
