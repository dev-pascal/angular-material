import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';
import { MatDialog, MatDialogConfig, MatDialogRef, MatDialogState } from '@angular/material/dialog';
import { ErrorModalComponent } from '../../error-modal/error-modal.component';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {

  config: MatDialogConfig = {
    backdropClass: "dialog-background",
    autoFocus: true,
    maxWidth: '100%',
    maxHeight: '100%',
  };

  constructor(
    public dialog: MatDialog,
  ) { }

  matDialogRef: MatDialogRef<ErrorModalComponent,any>|undefined;

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(err => {
        if (request.method != 'OPTIONS' && this.matDialogRef?.getState() !== MatDialogState.OPEN) {
          this.matDialogRef = this.dialog.open(ErrorModalComponent, {
            ...this.config,
            data: {
              type: 'backend',
              error: err
            }
          });
        }
        return throwError(() => err);
      })
    );
  }
}
