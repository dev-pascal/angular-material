import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpEncoderInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (request.urlWithParams.includes('_')) {
            request = request.clone({ url: request.urlWithParams.replaceAll('_','%5F') });
        }
        if (request.urlWithParams.includes("\\")) {
            request = request.clone({ url: request.urlWithParams.replaceAll('\\','%2F') });
        }
        if (request.urlWithParams.includes(".")) {
            request = request.clone({ url: request.urlWithParams.replaceAll('.','%2E') });
        }
        return next.handle(request).pipe();
    }
}
