export interface IMenu {
    path: string;
    label: string;
}

export const MENUS: IMenu[] = [
  {
    path: '',
    label: 'Dashboard',
  },
  {
    path: 'categories',
    label: 'Categories',
  },
  {
    path: 'posts',
    label: 'Posts'
  },
  {
    path: 'comments',
    label: 'Comments'
  }
];
