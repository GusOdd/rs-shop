import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SharedModule } from '../shared/shared.module';
import { PopularItemsComponent } from './components/popular-items/popular-items.component';

@NgModule({
  declarations: [MainPageComponent, PopularItemsComponent],
  imports: [CommonModule, SharedModule, MainPageRoutingModule],
})
export class MainPageModule {}
