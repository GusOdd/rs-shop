import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { BACKEND } from 'src/app/shared/constants';
import { IMainCategory } from '../models/main-category.type';
import { loadCategories, loadCategoriesSuccessful } from './actions';

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
}
