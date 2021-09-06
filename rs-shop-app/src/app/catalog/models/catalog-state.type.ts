import { IGoods } from './goods.type';
import { IMainCategory } from './main-category.type';

export interface ICatalogState {
  categories: IMainCategory[];
  goods: IGoods[];
}
