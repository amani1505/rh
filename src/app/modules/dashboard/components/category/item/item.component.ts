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
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { IconButtonComponent } from '@components/button/icon-button/icon-button.component';
import { ModalComponent } from '@components/modal/modal.component';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from '@model/app-state';
import { invoke_delete_category_api } from 'app/store/category/category.action';
import { selectAppState } from 'app/shared/store/app.selector';
import { set_api_status } from 'app/shared/store/app.action';


@Component({
  selector: '[cartegory-table-item]',
  standalone: true,
  imports: [
    AngularSvgIconModule,
    NgIf,
    MatButtonModule,
    MatMenuModule,
    ModalComponent,
    IconButtonComponent,
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
  isModalOpen: boolean = false;
  loading: boolean = false;
  constructor(
    private _store: Store,
    private _appStore: Store<AppStateInterface>,
    
  ) {}
  openModal() {
    this.isModalOpen = true;
  }
  deleteProductCategory(id: string) {
    this.loading = true;
    this._store.dispatch(invoke_delete_category_api({ id }));
    let apiStatus$ = this._appStore.pipe(select(selectAppState));
    apiStatus$.subscribe((apState) => {
      if (apState.api_status == 'success') {
        this._appStore.dispatch(
          set_api_status({
            api_status: { api_response_message: '', api_status: '' },
          }),
        );
        this.loading = false;
        
        this.closeModal();
      }
      else if(apState.api_status == 'error'){
        this.loading = false;
        this.closeModal();
      }
    });
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
