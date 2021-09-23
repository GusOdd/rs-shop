import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IGoods } from 'src/app/core/models/goods.type';
import { IAppState } from 'src/app/models/app-state.type';
import { POPULAR_ITEMS, POPULAR_ITEMS_CHUNK } from 'src/app/shared/constants';

@Component({
  selector: 'app-popular-items',
  templateUrl: './popular-items.component.html',
  styleUrls: ['./popular-items.component.scss'],
})
export class PopularItemsComponent implements OnInit {
  popularProducts$?: Observable<IGoods[][]>;

  @ViewChild('carousel', { static: true }) carousel?: NgbCarousel;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.carousel?.pause();
    setTimeout(() => {
      this.popularProducts$ = this.store
        .select((state) => state.catalogState.goods)
        .pipe(
          map((value) => {
            const goodsRaw: IGoods[] = [...value];
            goodsRaw.sort((a, b) => b.rating - a.rating);
            goodsRaw.length = POPULAR_ITEMS;

            const goods: IGoods[][] = [];

            for (let i = 0; i < goodsRaw.length; i += POPULAR_ITEMS_CHUNK) {
              const tempArray = goodsRaw.slice(i, i + POPULAR_ITEMS_CHUNK);
              goods.push(tempArray);
            }

            return goods;
          }),
        );
    });
  }
}
