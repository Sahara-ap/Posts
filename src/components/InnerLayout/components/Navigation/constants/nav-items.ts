import { AppRoute } from 'utils/route/AppRoute';

export interface INavItem {
  linkTo: string;
  text: string;
}

export const navItems: INavItem[] = [
  {
    linkTo: AppRoute.Main(),
    text: 'Main',
  },
  {
    linkTo: AppRoute.PostCreating(),
    text: 'Create',
  },
 ];
