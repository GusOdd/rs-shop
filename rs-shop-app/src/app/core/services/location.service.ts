import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IIpInfo } from '../models/ip-info.type';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  getLocation(): Observable<IIpInfo> {
    return this.http.get<IIpInfo>('https://ipinfo.io');
  }
}
