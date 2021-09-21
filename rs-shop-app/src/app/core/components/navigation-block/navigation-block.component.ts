import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { CatalogService } from 'src/app/catalog/services/catalog.service';
import { IAppState } from 'src/app/models/app-state.type';
import { ICategory } from '../../models/category.type';
import { IGoods } from '../../models/goods.type';
import { IMainCategory } from '../../models/main-category.type';

@Component({
  selector: 'app-navigation-block',
  templateUrl: './navigation-block.component.html',
  styleUrls: ['./navigation-block.component.scss'],
})
export class NavigationBlockComponent implements OnInit {
  myControl = new FormControl();

  mainCategories$: Observable<IMainCategory[]>;

  filteredMainCategories$!: Observable<IMainCategory[]>;

  subCategories$: Observable<ICategory[]>;

  filteredSubCategories$!: Observable<ICategory[]>;

  goods$: Observable<IGoods[]>;

  filteredGoods$!: Observable<IGoods[]>;

  constructor(
    private router: Router,
    public catalogService: CatalogService,
    private store: Store<IAppState>,
  ) {
    this.mainCategories$ = this.store.select((state) => state.catalogState.categories);

    this.subCategories$ = this.store
      .select((state) => state.catalogState.categories)
      .pipe(
        map((categories) => {
          const subCategories: ICategory[][] = [];

          categories.forEach((category) => {
            const categorySubCategories: ICategory[] = [];

            category.subCategories.forEach((subCategory) => {
              const subCatWithMainCatID: ICategory = { ...subCategory };
              subCatWithMainCatID.mainCategoryID = category.id;
              categorySubCategories.push(subCatWithMainCatID);
            });

            subCategories.push(categorySubCategories);
          });

          return subCategories.reduce((acc, val) => acc.concat(val), []);
        }),
      );

    this.goods$ = this.store.select((state) => state.catalogState.goods);
  }

  ngOnInit(): void {
    this.filteredMainCategories$ = (this.myControl.valueChanges as Observable<string>).pipe(
      debounceTime(100),
      distinctUntilChanged(),
      filter((value) => value.length > 2),
      switchMap((value) =>
        this.mainCategories$.pipe(
          map((items) =>
            items.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())),
          ),
        ),
      ),
    );

    this.filteredSubCategories$ = (this.myControl.valueChanges as Observable<string>).pipe(
      debounceTime(100),
      distinctUntilChanged(),
      filter((value) => value.length > 2),
      switchMap((value) =>
        this.subCategories$.pipe(
          map((items) =>
            items.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())),
          ),
        ),
      ),
    );

    this.filteredGoods$ = (this.myControl.valueChanges as Observable<string>).pipe(
      debounceTime(100),
      distinctUntilChanged(),
      filter((value) => value.length > 2),
      switchMap((value) =>
        this.goods$.pipe(
          map((items) =>
            items.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())),
          ),
        ),
      ),
    );
  }

  onClickCatalogButtonHandler() {
    if (this.catalogService.isCatalogHidden) this.router.navigate(['/catalog']);
    if (!this.catalogService.isCatalogHidden) this.router.navigate(['/']);
    this.catalogService.isCatalogHidden = !this.catalogService.isCatalogHidden;
  }

  onClickLogoHandler() {
    this.catalogService.isCatalogHidden = true;
  }
}
