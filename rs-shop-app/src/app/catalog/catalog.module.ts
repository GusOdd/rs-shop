import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './components/catalog/catalog.component';
import { SharedModule } from '../shared/shared.module';
import { FaIconComponent } from './components/fa-icon/fa-icon.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { MainCategoryComponent } from './components/main-category/main-category.component';

@NgModule({
  declarations: [CatalogComponent, FaIconComponent, SubcategoryComponent, MainCategoryComponent],
  imports: [CommonModule, SharedModule, CatalogRoutingModule],
})
export class CatalogModule {}
