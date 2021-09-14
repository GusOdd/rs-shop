import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IMainCategory } from '../../models/main-category.type';
import { loadCategories } from '../../store/actions';
import { IAppState } from '../../../models/app-state.type';

@Component({
  selector: 'app-categories-block',
  templateUrl: './categories-block.component.html',
  styleUrls: ['./categories-block.component.scss'],
})
export class CategoriesBlockComponent implements OnInit {
  categories$!: Observable<IMainCategory[]>;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadCategories());
    this.categories$ = this.store.select((state) => state.catalogState.categories);
  }
}
