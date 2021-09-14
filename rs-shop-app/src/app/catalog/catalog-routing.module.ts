import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { MainCategoryComponent } from './components/main-category/main-category.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: ':mainCategoryID', component: MainCategoryComponent },
  { path: ':mainCategoryID/:subCategoryID', component: SubcategoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {}
