import { MenuItem } from '@models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      items: [
        {
          icon: 'assets/icons/heroicons/solid/chart-pie.svg',
          label: 'Dashboard',
          route: '/admin/dashboard',
        },
       
        {
          icon: 'assets/icons/heroicons/solid/shopping-bag.svg',
          label: 'products',
          route: '/admin/dashboard/product',
          children: [
            {
              icon: 'assets/icons/heroicons/solid/users.svg',
              label: 'products',
              route: '/admin/dashboard/product',
            },
            {
              icon: 'assets/icons/heroicons/solid/users.svg',
              label: 'variants',
              route: '/admin/dashboard/product/variants',
            },
            {
              icon: 'assets/icons/heroicons/solid/users.svg',
              label: 'category',
              route: '/admin/dashboard/product/category',
            },
          ],
        },
        {
          icon: 'assets/icons/heroicons/solid/users-group.svg',
          label: 'customers',
          route: '/users',
        },
        {
          icon: 'assets/icons/heroicons/solid/shopping-cart.svg',
          label: 'carts',
          route: '/users',
        },
        {
          icon: 'assets/icons/heroicons/solid/briefcase.svg',
          label: 'order',
          route: '/users',
        },
        {
          icon: 'assets/icons/heroicons/solid/bank-notes.svg',
          label: 'payment',
          route: '/users',
        },
        {
          icon: 'assets/icons/heroicons/solid/user-circle.svg',
          label: 'profile',
          route: '/users',
        },
      ],
    },
  ];
}
