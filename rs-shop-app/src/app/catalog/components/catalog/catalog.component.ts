import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/models/app-state.type';
import { IMainCategory } from '../../models/main-category.type';
import { loadCategories } from '../../store/actions';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  categories$!: Observable<IMainCategory[]>;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadCategories());
    this.categories$ = this.store.select((state) => state.catalogState.categories);
  }
}
