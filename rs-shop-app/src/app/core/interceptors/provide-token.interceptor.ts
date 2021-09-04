import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IIpInfo } from '../models/ip-info.type';
import { IP_SERVICE } from 'src/app/shared/constants';

@Injectable()
export class ProvideTokenInterceptor implements HttpInterceptor {
  apiKey = '97d1bb595fd2cd';

  intercept(request: HttpRequest<IIpInfo>, next: HttpHandler): Observable<HttpEvent<IIpInfo>> {
    if (request.url === IP_SERVICE) {
      const requestWithToken = request.clone({ url: `${request.url}?token=${this.apiKey}` });
      return next.handle(requestWithToken);
    }
    return next.handle(request);
  }
}
