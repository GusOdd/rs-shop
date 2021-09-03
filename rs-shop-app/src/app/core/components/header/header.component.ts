import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { merge, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { IIpInfo } from '../../models/ip-info.type';
import { LocationService } from '../../services/location.service';
import { LocationModalWindowComponent } from '../location-modal-window/location-modal-window.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent { 
  city$: Observable<IIpInfo['city']>;

  constructor(private locationService: LocationService, private dialog: MatDialog) {
    this.city$ = this.locationService.getLocation().pipe(map((ipInfo) => ipInfo.city))
  }

  clickOnLinkHandler(event: Event) {
    event.preventDefault();

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;

    const dialogRef = this.dialog.open(LocationModalWindowComponent, dialogConfig);

    this.city$ = dialogRef.afterClosed();
  }
}
