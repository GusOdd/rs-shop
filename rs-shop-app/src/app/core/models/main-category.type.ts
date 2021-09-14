import { ICategory } from './category.type';

export interface IMainCategory extends ICategory {
  subCategories: ICategory[];
}
