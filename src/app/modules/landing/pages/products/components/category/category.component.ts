import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,AngularSvgIconModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  @Output() showSubCategory= new EventEmitter<string>()
  openIndex: number | null = null;
  categories: any[] = [
    {
      id: 1,
      title: 'clothes',
      image: '../../../../../assets/images/icons/dress.svg',
    },
    {
      id: 1,
      title: 'footware',
      image: '../../../../../assets/images/icons/dress.svg',
    },
    {
      id: 1,
      title: 'jewelry',
      image: '../../../../../assets/images/icons/dress.svg',
    },
    {
      id: 1,
      title: 'perfume',
      image: '../../../../../assets/images/icons/dress.svg',
    },
    {
      id: 1,
      title: 'cosmetics',
      image: '../../../../../assets/images/icons/dress.svg',
    },
    {
      id: 1,
      title: 'Glasses',
      image: '../../../../../assets/images/icons/dress.svg',
    },
    {
      id: 1,
      title: 'Bags',
      image: '../../../../../assets/images/icons/dress.svg',
    },
  ];

  onShowSubCategory(newSubCategory:string){
    this.showSubCategory.emit(newSubCategory)
  }



  toggleAccordion(index: number): void {
    if (this.openIndex === index) {
      this.openIndex = null;
    } else {
      this.openIndex = index;
    }
  }

}
