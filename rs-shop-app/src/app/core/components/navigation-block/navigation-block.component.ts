import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogService } from 'src/app/catalog/services/catalog.service';

@Component({
  selector: 'app-navigation-block',
  templateUrl: './navigation-block.component.html',
  styleUrls: ['./navigation-block.component.scss'],
})
export class NavigationBlockComponent {
  constructor(private router: Router, public catalogService: CatalogService) {}

  onClickCatalogButtonHandler() {
    if (this.catalogService.isCatalogHidden) this.router.navigate(['/catalog']);
    if (!this.catalogService.isCatalogHidden) this.router.navigate(['/']);
    this.catalogService.isCatalogHidden = !this.catalogService.isCatalogHidden;
  }

  onClickLogoHandler() {
    this.catalogService.isCatalogHidden = true;
  }
}
