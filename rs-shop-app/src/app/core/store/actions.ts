import { createAction, props } from '@ngrx/store';
import { IGoods } from '../models/goods.type';
import { IMainCategory } from '../models/main-category.type';

export const loadGoods = createAction('[GOODS] LOAD');

export const loadGoodsSuccessful = createAction(
  '[GOODS] LOAD SUCCESSFUL',
  props<{ goods: IGoods[] }>(),
);

export const loadCategories = createAction('[CATEGORIES] LOAD');

export const loadCategoriesSuccessful = createAction(
  '[CATEGORIES] LOAD SUCCESSFUL',
  props<{ categories: IMainCategory[] }>(),
);
