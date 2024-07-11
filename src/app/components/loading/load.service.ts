import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoadService {

    private loadEvt: Subject<ILoadState> = new Subject<ILoadState>();

    private pendingRequests: number = 0;

    show(message: string): void {
        this.pendingRequests++;
        this.loadEvt.next({'active': true, 'message': message});
    }

    hide(): void {
        if (this.pendingRequests > 0) {
            this.pendingRequests--;
        }
        if (this.pendingRequests === 0) {
            this.loadEvt.next({'active': false});
        }
    }

    getLoadEvt(): Subject<ILoadState> {
        return this.loadEvt;
    }

}
export interface ILoadState {
    active: boolean;
    message?: string;
}
export const initialLoadState: ILoadState = {
    active: false,
    message: 'Cargando...'
}