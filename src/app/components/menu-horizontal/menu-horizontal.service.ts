import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class MenuHorizontalService {
    
    private $isLoggedIn: Subject<Boolean> = new Subject<Boolean>();
    
    sendLoggedStatus(flag: boolean) {
        this.$isLoggedIn.next(flag);
    }
    
    getLoggedStatus(): Subject<Boolean> {
        return this.$isLoggedIn;
    }
    
}