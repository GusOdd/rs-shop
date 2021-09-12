import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './components/catalog/catalog.component';
import { catalogReducer } from './store/reducers';
import { CatalogEffects } from './store/effects';
import { SharedModule } from '../shared/shared.module';
import { FaIconComponent } from './components/fa-icon/fa-icon.component';

@NgModule({
  declarations: [CatalogComponent, FaIconComponent],
  imports: [
    CommonModule,
    SharedModule,
    CatalogRoutingModule,
    StoreModule.forFeature('catalogState', catalogReducer),
    EffectsModule.forFeature([CatalogEffects]),
  ],
})
export class CatalogModule {}
