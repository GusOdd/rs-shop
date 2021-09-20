import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IGoods } from 'src/app/core/models/goods.type';
import { loadGoods } from 'src/app/core/store/actions';
import { IAppState } from 'src/app/models/app-state.type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  productID: string;

  product$?: Observable<IGoods | undefined>;

  mainCategoryID: string;

  subCategoryID: string;

  mainCategoryName$: Observable<string>;

  subCategoryName$: Observable<string>;

  chevronIcon = faChevronRight;

  @ViewChild('sliderView') sliderView?: ElementRef;

  constructor(private route: ActivatedRoute, private store: Store<IAppState>,
    ) {
    this.productID = this.route.snapshot.params.productID;
    this.mainCategoryID = this.route.snapshot.params.mainCategoryID;
    this.subCategoryID = this.route.snapshot.params.subCategoryID;

    this.store.dispatch(loadGoods());
    this.product$ = this.store
      .select((state) => state.catalogState.goods)
      .pipe(map((value) => value.find((product) => product.id === this.productID)));
    
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
  }

  clickHandler(imageUrl: string) {
    (this.sliderView!.nativeElement as HTMLDivElement).style.cssText = `background-image: url('${imageUrl}');`;
  }
}
