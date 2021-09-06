import { IGoods } from './goods.type';

export interface ICategory {
  mainCategoryName?: string;
  mainCategoryID?: string;
  id: string;
  name: string;
  goods?: IGoods[];
}
