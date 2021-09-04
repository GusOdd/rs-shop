import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation-block',
  templateUrl: './navigation-block.component.html',
  styleUrls: ['./navigation-block.component.scss'],
})
export class NavigationBlockComponent {
  isCatalogHidden: boolean = true;

  constructor(private router: Router) {}

  onClickCatalogButtonHandler(event: Event) {
    if (this.isCatalogHidden) this.router.navigate(['/catalog']);
    if (!this.isCatalogHidden) this.router.navigate(['/']);
    this.isCatalogHidden = !this.isCatalogHidden;
  }

  onClickLogoHandler() {
    this.isCatalogHidden = true;
  }
}
