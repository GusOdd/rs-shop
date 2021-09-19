import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAppState } from 'src/app/models/app-state.type';
import { toggleSelectedItem } from 'src/app/shared/functions';
import { ICategory } from '../../../core/models/category.type';
import { IMainCategory } from '../../../core/models/main-category.type';
import { loadCategories } from '../../../core/store/actions';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  categories$!: Observable<IMainCategory[]>;

  subCategories$!: Observable<ICategory[]>;

  mainCategoryName!: string;

  mainCategoryID!: string;

  @ViewChild('categoriesList') categoriesList?: MatSelectionList;

  @ViewChild('subCategoriesList') subCategoriesList?: MatSelectionList;

  constructor(private store: Store<IAppState>, private catalogService: CatalogService) {
    this.catalogService.isCatalogHidden = false;
  }

  ngOnInit(): void {
    this.store.dispatch(loadCategories());
    this.categories$ = this.store.select((state) => state.catalogState.categories);
  }

  onMouseOverCategoryHandler(mainCategory: IMainCategory) {
    toggleSelectedItem(this.categoriesList!, mainCategory.id);

    this.mainCategoryName = mainCategory.name;
    this.mainCategoryID = mainCategory.id;

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
