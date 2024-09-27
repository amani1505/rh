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
import { ButtonComponent } from '@components/button/button.component';
import { PaginationComponent } from '@components/paginations/pagination/pagination.component';
import { TablePaginationComponent } from '@components/paginations/table-pagination/table-pagination.component';
import { ClickOutsideDirective } from '@directive/click-outside.directive';
import { MultiSelectComponent } from '@components/form/select/multi-select/multi-select.component';
import { SeachableSelectComponent } from '@components/form/select/seachable-select/seachable-select.component';
import { NormalSelectComponent } from '@components/form/select/normal-select/normal-select.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    CommonModule,
    ClickOutsideDirective,
    ItemComponent,
    MatDialogModule,
    ImageUploaderComponent,
    NgxPaginationModule,
    AddNewComponent,
    ButtonComponent,
    PaginationComponent,
    TablePaginationComponent,
    MultiSelectComponent,
    SeachableSelectComponent,
    NormalSelectComponent,
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  createProduct: boolean = false;
  categories$: Observable<CategoryItemInterface[]> = new Observable();
  responsive: boolean = true;
  autoHide: boolean = true;
  loading: boolean = true;
  nextLabel: string = '';
  previousLabel: string = '';
  maxSize: number = 7;
  page: number = 1;
  total: number = 10;
  perPage: number = 1;
  totalPage: number = 1;
  options: Array<string> = [
    'Electronics',
    'Fashion',
    'Home & Kitchen',
    'Health & Beauty',
    'Sports & Outdoors',
    'Toys & Games',
    'Books',
    'Movies & Music',
    'Automotive',
    'Pet Supplies',
    'Grocery & Gourmet Food',
    'Office Supplies',
    'Baby Products',
    'Jewelry',
    'Watches',
    'Luggage & Travel Gear',
    'Tools & Home Improvement',
    'Garden & Outdoor',
    'Furniture',
    'Appliances',
    'Industrial & Scientific',
    'Musical Instruments',
    'Software',
    'Video Games',
    'Art & Craft Supplies',
    'Cameras & Photography',
    'Cell Phones & Accessories',
    'Computers & Accessories',
    'Smart Home Devices',
    'Stationery & Party Supplies',
    'Shoes',
    'Handbags & Wallets',
    'Personal Care Appliances',
    'Fitness & Exercise',
    'Camping & Hiking',
    'Cycling',
    'Water Sports',
    'Winter Sports',
    'Outdoor Recreation',
    'Board Games',
    'Puzzles',
    'Collectibles',
    'Hobbies',
    'Model Building',
    'Drones',
    '3D Printers',
    'Car Electronics',
    'Motorcycle Accessories',
    'RV Parts & Accessories',
    'Marine Electronics',
    'GPS & Navigation',
    'Medical Supplies',
    'Safety & Security',
    'Green & Eco-Friendly Products',
    'Wine & Spirits',
    'Bakery & Pastry Supplies',
    'Meat & Seafood',
    'Dairy & Eggs',
    'Coffee, Tea & Beverages',
    'Organic & Natural Food',
    'Catering & Restaurant Supplies',
    'Specialty & Gourmet Food',
    "Men's Clothing",
    "Women's Clothing",
    "Kids' Clothing",
    'Footwear',
    'Sportswear',
    'Eyewear',
    'Hats & Caps',
    'Belts & Suspenders',
    'Socks & Hosiery',
    'Underwear & Lingerie',
    'Sleepwear & Robes',
    'Costumes & Accessories',
    'Wedding & Party Supplies',
    'Home Decor',
    'Bedding & Linens',
    'Bath & Shower Products',
    'Kitchen & Dining',
    'Small Appliances',
    'Cookware',
    'Bakeware',
    'Cutlery',
    'Tableware',
    'Glassware & Drinkware',
    'Home Storage & Organization',
    'Cleaning Supplies',
    'Laundry Supplies',
    'Lighting',
    'Smart Lighting',
    'Wall Art & Posters',
    'Photo Frames & Albums',
    'Rugs, Pads & Protectors',
    'Curtains & Window Treatments',
    'Home Safety & Security',
    'Baby Gear',
    'Diapering',
    'Feeding',
    'Nursery',
    'Strollers & Accessories',
    'Car Seats',
    'Toys & Learning',
    'Baby & Toddler Toys',
    'Parenting Books',
    "Men's Grooming",
    "Women's Beauty",
    'Hair Care',
    'Skin Care',
    'Makeup',
    'Fragrances',
    'Nail Care',
    'Bath & Body',
    'Health Care',
    'Vitamins & Supplements',
    'Medical Equipment',
    'Personal Care',
    'Weight Management',
    'Sexual Wellness',
    'Hearing Aids',
    'Orthopedic Supplies',
    'Dental Care',
    'Massage Tools & Equipment',
    'Aromatherapy',
  ];

  constructor(private _store: Store) {
    this._store.pipe(select(select_categories)).subscribe((response) => {
      this.total = response.total_items;
      this.page = response.current_page;
      this.perPage = response.limit;
      this.totalPage = response.total_pages;
    });
  }

  ngOnInit() {
    this._store.dispatch(invoke_category_api({ page: this.page }));
    this.categories$ = this._store.pipe(
      select(select_categories),
      map((category: CategoryInterface) => category?.data ?? []),
    );
  }
  openDialog(opened: boolean) {
    this.createProduct = opened;
  }

  handleSidebarClose() {
    this.createProduct = false; // Handle sidebar close event
  }
  getPage(page: number) {
    this._store.dispatch(invoke_category_api({ page: page }));
  }

  onSearch(searchTerm: string) {
    console.log('Search Term Parent component', searchTerm);
    this.options.filter((option) => {
      console.log('Optionssss', option);
      const optioin = option.toLowerCase().includes(searchTerm.toLowerCase());

      console.log('Option', optioin);
      return optioin;
      return;
    });
  }

  handleSelection(option: string) {
    console.log('Selected option:', option);
    // Perform actions based on the selected option
  }

  handleMultipleSelection(options:Array<string>){
    console.log('Selected Multiple option:', options);
  }
  handleSeachableSelection(option:string){
    console.log('Selected Searchable option:', option);
  }
}
