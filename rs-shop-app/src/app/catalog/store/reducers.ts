import { createReducer, on } from '@ngrx/store';
import { loadCategories, loadCategoriesSuccessful } from './actions';
import { initialCatalogState } from './state';

export const catalogReducer = createReducer(
  initialCatalogState,
  on(loadCategories, (state) => {
    return {...state};
  }),
  on(loadCategoriesSuccessful, (state, { categories }) => {
    return {...state, categories};
  }),
);
