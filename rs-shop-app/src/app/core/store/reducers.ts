import { createReducer, on } from '@ngrx/store';
import {
  loadCategories,
  loadCategoriesSuccessful,
  loadGoods,
  loadGoodsSuccessful,
} from './actions';
import { initialCatalogState } from './state';

export const catalogReducer = createReducer(
  initialCatalogState,
  on(loadGoods, (state) => {
    return { ...state };
  }),
  on(loadGoodsSuccessful, (state, { goods }) => {
    return { ...state, goods };
  }),
  on(loadCategories, (state) => {
    return { ...state };
  }),
  on(loadCategoriesSuccessful, (state, { categories }) => {
    return { ...state, categories };
  }),
);
