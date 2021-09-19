import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICategory } from 'src/app/core/models/category.type';
import { IAppState } from 'src/app/models/app-state.type';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  isCatalogHidden: boolean = true;

  subCategories$?: Observable<ICategory[]>;

  constructor(private store: Store<IAppState>) {}

  getSubCategories(mainCategoryID: string) {
    this.subCategories$ = this.store
      .select((state) => state.catalogState.categories)
      .pipe(
        map((categories) => {
          const selectedMainCategory = categories.filter(
            (category) => category.id === mainCategoryID,
          );
          return selectedMainCategory[0].subCategories;
        }),
      );
    
    this.isCatalogHidden = true;
  }
}
