import { Injectable } from "@angular/core";
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class BreakPointObserverService {
    public showContentForLarge$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    constructor(private breakpointObserver: BreakpointObserver) {

    }

    public initSubscriptions(): void {
        this.breakpointObserver
        .observe(['(min-width: 900px)'])
        .subscribe((state: BreakpointState) => {
          this.showContentForLarge$.next(state.matches)
        });
    }
}