import { MenuItem } from '@models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/admin/dashboard',
        },
       
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'products',
          route: '/admin/dashboard/product',
          children: [
            {
              icon: 'assets/icons/heroicons/outline/users.svg',
              label: 'products',
              route: '/admin/dashboard/product',
            },
            {
              icon: 'assets/icons/heroicons/outline/users.svg',
              label: 'variants',
              route: '/admin/dashboard/product/variants',
            },
            {
              icon: 'assets/icons/heroicons/outline/users.svg',
              label: 'category',
              route: '/admin/dashboard/product/category',
            },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Users',
          route: '/users',
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'carts',
          route: '/users',
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'order',
          route: '/users',
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'payment',
          route: '/users',
        },
      ],
    },
  ];
}
