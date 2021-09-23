import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IGoods } from 'src/app/core/models/goods.type';
import { loadGoods } from 'src/app/core/store/actions';
import { IAppState } from 'src/app/models/app-state.type';
import { MAIN_PAGE_ITEMS } from 'src/app/shared/constants';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  paused: boolean = false;

  unpauseOnArrow: boolean = false;

  pauseOnIndicator: boolean = false;

  pauseOnHover: boolean = true;

  products$?: Observable<IGoods[]>;

  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  constructor(private store: Store<IAppState>) {
    this.store.dispatch(loadGoods());

    this.products$ = this.store
      .select((state) => state.catalogState.goods)
      .pipe(
        map((value) => {
          const goods: IGoods[] = [];
          for (let i = 0; i < MAIN_PAGE_ITEMS; i += 1) {
            const index = Math.floor(Math.random() * value.length);
            goods.push(value[index]);
          }
          return goods;
        }),
      );
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
  }
}
