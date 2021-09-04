import { createAction, props } from '@ngrx/store';
import { IMainCategory } from '../models/main-category.type';

export const loadCategories = createAction(
  '[CATALOG CATEGORIES] LOAD',
);

export const loadCategoriesSuccessful = createAction(
  '[CATALOG CATEGORIES] LOAD SUCCESSFUL',
  props<{ categories: IMainCategory[] }>(),
);
