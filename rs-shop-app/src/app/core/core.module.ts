import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { LocationModalWindowComponent } from './components/location-modal-window/location-modal-window.component';
import { InformationBlockComponent } from './components/information-block/information-block.component';
import { NavigationBlockComponent } from './components/navigation-block/navigation-block.component';
import { CategoriesBlockComponent } from './components/categories-block/categories-block.component';
import { catalogReducer } from './store/reducers';
import { CatalogEffects } from './store/effects';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LocationModalWindowComponent,
    InformationBlockComponent,
    NavigationBlockComponent,
    CategoriesBlockComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    StoreModule.forFeature('catalogState', catalogReducer),
    EffectsModule.forFeature([CatalogEffects]),
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
