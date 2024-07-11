import { ErrorHandler, Injectable } from "@angular/core";
import { MatDialogConfig, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ErrorModalComponent } from "../components/error-modal/error-modal.component";
import { ErrorModalException } from "./error-modal-exception";

@Injectable({
    providedIn: 'root'
})
export class ErrorModalExceptionHandler implements ErrorHandler {

    config: MatDialogConfig = {
        backdropClass: "dialog-background",
        autoFocus: true,
        maxWidth: '100%',
        maxHeight: '100%',
    };

    constructor(
        public dialog: MatDialog,
    ) { }

    matDialogRef: MatDialogRef<ErrorModalComponent, any> | undefined;

    handleError(error: Error): void {
        if (!(error instanceof ErrorModalException)) {
            return;
        }
        this.matDialogRef = this.dialog.open(ErrorModalComponent, {
            ...this.config,
            data: {
                type: 'frontend',
                error: error.message
            }
        });
    }

}