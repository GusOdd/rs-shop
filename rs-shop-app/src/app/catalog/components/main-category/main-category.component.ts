import { Component, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/core/models/category.type';
import { toggleSelectedItem } from 'src/app/shared/functions';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: ['./main-category.component.scss'],
})
export class MainCategoryComponent {
  mainCategoryID?: string;

  @ViewChild('subCategoriesList') subCategoriesList?: MatSelectionList;

  constructor(private route: ActivatedRoute, public catalogService: CatalogService) {
    this.mainCategoryID = this.route.snapshot.params.mainCategoryID;
    this.catalogService.getSubCategories(this.mainCategoryID!);
  }

  onMouseOverSubCategoryHandler(subCategory: ICategory) {
    toggleSelectedItem(this.subCategoriesList!, subCategory.id);
  }
}
