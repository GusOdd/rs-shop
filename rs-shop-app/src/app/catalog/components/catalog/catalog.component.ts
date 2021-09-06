import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAppState } from 'src/app/models/app-state.type';
import { toggleSelectedItem } from 'src/app/shared/functions';
import { ICategory } from '../../models/category.type';
import { IMainCategory } from '../../models/main-category.type';
import { loadCategories } from '../../store/actions';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  categories$!: Observable<IMainCategory[]>;

  subCategories$!: Observable<ICategory[]>;

  mainCategoryName!: string;

  @ViewChild('categoriesList') categoriesList?: MatSelectionList;

  @ViewChild('subCategoriesList') subCategoriesList?: MatSelectionList;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadCategories());
    this.categories$ = this.store.select((state) => state.catalogState.categories);
  }

  onMouseOverCategoryHandler(mainCategory: IMainCategory) {
    toggleSelectedItem(this.categoriesList!, mainCategory.id);

    this.mainCategoryName = mainCategory.name;

    this.subCategories$ = this.categories$.pipe(
      map((categories) => {
        const selectedMainCategory = categories.filter(
          (category) => category.id === mainCategory.id,
        );
        return selectedMainCategory[0].subCategories;
      }),
    );
  }

  onMouseOverSubCategoryHandler(subCategory: ICategory) {
    toggleSelectedItem(this.subCategoriesList!, subCategory.id);
  }
}
