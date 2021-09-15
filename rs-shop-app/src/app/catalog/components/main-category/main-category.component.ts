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
    this.route.params.subscribe((value) => (this.mainCategoryID = value.mainCategoryID));
  }
}
