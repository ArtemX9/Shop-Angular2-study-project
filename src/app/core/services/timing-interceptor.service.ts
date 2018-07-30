import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class TimingInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let startTime;
    if (req.url.includes('users')) {
      startTime = new Date();
    }

    return next.handle(req)
      .pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse && req.url.includes('users')) {
            const endTime = new Date();
            const diff = endTime.getTime() - startTime.getTime();
            const Seconds_from_T1_to_T2 = diff / 1000;
            const Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
            console.log('Difference between requests: ', Seconds_Between_Dates, ' seconds');
          }
          return event;
        })
      );
  }
}
