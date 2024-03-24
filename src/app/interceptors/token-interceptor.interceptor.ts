import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let localToken = localStorage.getItem('token');
    if (localToken) {
      let parsedInfo= JSON.parse(localToken as string);
      let token = parsedInfo.token;
      request = request.clone( {
        headers: request.headers.set (
          "Authorization", token
        )
      })
    }
    return next.handle(request);
  }
}
