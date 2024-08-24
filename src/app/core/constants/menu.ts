import { MenuItem } from '@models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/dashboard',
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'products category',
          route: 'category',
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'products',
          route: '/users',
          children: [
            {
              icon: 'assets/icons/heroicons/outline/users.svg',
              label: 'products',
              route: '/users',
            },
            {
              icon: 'assets/icons/heroicons/outline/users.svg',
              label: 'variants',
              route: '/users',
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
