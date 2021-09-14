import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss'],
})
export class SubcategoryComponent {
  constructor(private catalogService: CatalogService, private route: ActivatedRoute) {
    this.catalogService.isCatalogHidden = true;
    route.params.subscribe((value) => console.log(value));
  }
}
