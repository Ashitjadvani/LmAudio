import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http'
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const user = this.authService.checkUser();

    if (user && user.token) {
      const reqWithHeaders = req.clone({
        setHeaders: {
          'Authorization': 'Bearer ' + user.token
        }
      })

      console.log('Inside If block: JWT Interceptor')

      return next.handle(reqWithHeaders)
    } else {
      console.log('Inside Else block: JWT Interceptor')

      return next.handle(req)
    }
  }
}
