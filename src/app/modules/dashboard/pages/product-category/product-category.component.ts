import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import {
  TableModule,
  TableRowCollapseEvent,
  TableRowExpandEvent,
} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { TagModule } from 'primeng/tag';
import { CustomerService } from './services/customer.servive';
import { Customer } from './domain/customer';

@Component({
  selector: 'app-product-category',
  standalone: true,
  imports: [TableModule, HttpClientModule, TagModule],
  providers: [CustomerService],
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.scss',
})
export class ProductCategoryComponent implements OnInit {
  customers!: Customer[];

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomersMedium().then((data) => {
            this.customers = data;
        });
    }

    calculateCustomerTotal(name: string) {
        let total = 0;

        if (this.customers) {
            for (let customer of this.customers) {
                if (customer.representative?.name === name) {
                    total++;
                }
            }
        }

        return total;
    }

    // getSeverity(status: string) {
    //     switch (status) {
    //         case 'unqualified':
    //             return 'danger';

    //         case 'qualified':
    //             return 'success';

    //         case 'new':
    //             return 'info';

    //         case 'negotiation':
    //             return 'warning';

    //         case 'renewal':
    //             return null;
    //     }
    // }

}
