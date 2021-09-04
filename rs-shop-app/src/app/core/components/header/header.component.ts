import { Component, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MenuCloseReason } from '@angular/material/menu/menu';
import { Observable, merge } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IIpInfo } from '../../models/ip-info.type';
import { LocationService } from '../../services/location.service';
import { LocationModalWindowComponent } from '../location-modal-window/location-modal-window.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  city$: Observable<string>;

  cityByIP$: Observable<IIpInfo['city']>;

  isDropDownMenuHidden: boolean = true;

  closed: EventEmitter<MenuCloseReason> = new EventEmitter();

  constructor(private locationService: LocationService, private dialog: MatDialog) {
    this.cityByIP$ = this.locationService.getLocation().pipe(map((ipInfo) => ipInfo.city));
    this.city$ = this.cityByIP$;
  }

  clickOnLocationLinkHandler(event: Event) {
    event.preventDefault();

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;

    const dialogRef = this.dialog.open(LocationModalWindowComponent, dialogConfig);

    const selectedCity$: Observable<string> = dialogRef
      .afterClosed()
      .pipe(filter((city) => city !== undefined));

    this.city$ = merge(this.cityByIP$, selectedCity$);
  }

  clickOnDropDownMenuHandler() {
    this.isDropDownMenuHidden = false;
  }

  closedMenuHandler() {
    this.isDropDownMenuHidden = true;
  }
}
