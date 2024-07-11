import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadService } from '../../loading/load.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingInterceptor implements HttpInterceptor {

  constructor(
    private readonly injector: Injector,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers: HttpHeaders = req.headers;
    let loadMessage = headers.get(LOAD_MESSAGE_KEY);
    if (!loadMessage) {
      loadMessage = 'Cargando...';
    }
    const loadService = this.injector.get(LoadService);
    loadService.show(loadMessage);
    return next.handle(req).pipe(finalize(() => {
      loadService.hide();
    }));
  }

}
export const LOAD_MESSAGE_KEY: string = "load-message-key";