import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { LocationModalWindowComponent } from './components/location-modal-window/location-modal-window.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LocationModalWindowComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
