import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: ['./main-category.component.scss'],
})
export class MainCategoryComponent {
  mainCategoryID?: string;

  constructor(private route: ActivatedRoute, public catalogService: CatalogService) {
    this.mainCategoryID = this.route.snapshot.params.mainCategoryID;
    this.catalogService.getSubCategories(this.mainCategoryID!);
  }
}
