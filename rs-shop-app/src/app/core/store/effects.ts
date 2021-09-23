import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { debounceTime, map, mergeMap, scan, switchMap } from 'rxjs/operators';
import { BACKEND } from 'src/app/shared/constants';
import { ICategory } from '../models/category.type';
import { IGoods } from '../models/goods.type';
import { IMainCategory } from '../models/main-category.type';
import {
  loadCategories,
  loadCategoriesSuccessful,
  loadGoods,
  loadGoodsSuccessful,
} from './actions';

@Injectable({
  providedIn: 'root',
})
export class CatalogEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  getCategories: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCategories),
      switchMap(() =>
        this.http
          .get<IMainCategory[]>(`${BACKEND}/categories`)
          .pipe(map((categories) => loadCategoriesSuccessful({ categories }))),
      ),
    );
  });

  getGoods: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadGoods),

      switchMap(() =>
        this.http.get<IMainCategory[]>(`${BACKEND}/categories`).pipe(
          switchMap((data) => data),

          map((data) => {
            const arr: ICategory[] = [];

            data.subCategories.forEach((element) => {
              const obj: ICategory = {
                ...element,
                mainCategoryName: data.name,
                mainCategoryID: data.id,
              };
              arr.push(obj);
            });
            return arr;
          }),

          switchMap((data) => data),

          mergeMap((data) => {
            return this.http
              .get<IGoods[]>(`${BACKEND}/goods/category/${data.mainCategoryID}/${data.id}`)
              .pipe(
                map((newData) => {
                  const arr: IGoods[] = [];

                  newData.forEach((element) => {
                    const obj: IGoods = {
                      ...element,
                      mainCategoryName: data.mainCategoryName!,
                      mainCategoryID: data.mainCategoryID!,
                      subCategoryName: data.name,
                      subCategoryID: data.id,
                    };
                    arr.push(obj);
                  });
                  return arr;
                }),
              );
          }),

          scan((acc: IGoods[], val) => acc.concat(val), []),

          debounceTime(300),

          map((goods) => loadGoodsSuccessful({ goods })),
        ),
      ),
    );
  });
}
