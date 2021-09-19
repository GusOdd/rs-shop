import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IGoods } from 'src/app/core/models/goods.type';
import { loadGoods } from 'src/app/core/store/actions';
import { IAppState } from 'src/app/models/app-state.type';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss'],
})
export class SubcategoryComponent {
  mainCategoryID: string;

  subCategoryID: string;

  mainCategoryName$: Observable<string>;

  subCategoryName$: Observable<string>;

  chevronIcon = faChevronRight;

  goods$: Observable<IGoods[]>;

  typeOfSorting?: 'rating' | 'price';

  isSortingAscending: boolean = true;

  constructor(
    private catalogService: CatalogService,
    private route: ActivatedRoute,
    private store: Store<IAppState>,
  ) {
    this.catalogService.isCatalogHidden = true;

    this.mainCategoryID = this.route.snapshot.params.mainCategoryID;
    this.subCategoryID = this.route.snapshot.params.subCategoryID;

    this.mainCategoryName$ = this.store
      .select((state) => state.catalogState.categories)
      .pipe(
        map((categories) => categories.find((category) => category.id === this.mainCategoryID)),
        map((value) => value!.name),
      );

    this.subCategoryName$ = this.store
      .select((state) => state.catalogState.categories)
      .pipe(
        map((categories) => categories.find((category) => category.id === this.mainCategoryID)),
        map((value) =>
          value!.subCategories.find((subCategory) => subCategory.id === this.subCategoryID),
        ),
        map((value) => value!.name),
      );

    this.store.dispatch(loadGoods());
    this.goods$ = this.store
      .select((state) => state.catalogState.goods)
      .pipe(map((value) => value.filter((goods) => goods.subCategoryID === this.subCategoryID)));

    this.store
      .select((state) => state.catalogState.goods)
      .pipe(map((value) => value.filter((goods) => goods.subCategoryID === this.subCategoryID)))
      .subscribe((value) => console.log(value));
  }

  sortingHandler() {
    if (this.typeOfSorting === 'rating') {
      this.typeOfSorting = 'price';
    } else {
      this.typeOfSorting = 'rating';
    }

    this.isSortingAscending = !this.isSortingAscending;
  }
}
