import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './components/catalog/catalog.component';
import { StoreModule } from '@ngrx/store';
import { catalogReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { CatalogEffects } from './store/effects';

@NgModule({
  declarations: [CatalogComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    StoreModule.forFeature('catalogState', catalogReducer),
    EffectsModule.forFeature([CatalogEffects]),
  ],
})
export class CatalogModule {}
