import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IP_SERVICE } from 'src/app/shared/constants';

import { IIpInfo } from '../models/ip-info.type';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  getLocation(): Observable<IIpInfo> {
    return this.http.get<IIpInfo>(IP_SERVICE);
  }
}
