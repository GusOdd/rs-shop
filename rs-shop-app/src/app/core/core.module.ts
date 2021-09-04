import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { LocationModalWindowComponent } from './components/location-modal-window/location-modal-window.component';
import { InformationBlockComponent } from './components/information-block/information-block.component';
import { NavigationBlockComponent } from './components/navigation-block/navigation-block.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LocationModalWindowComponent, InformationBlockComponent, NavigationBlockComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
