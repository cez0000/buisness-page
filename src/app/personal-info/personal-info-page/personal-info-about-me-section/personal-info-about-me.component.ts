import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { ABOUT_ME_INFO } from 'src/app/constants';
import { BreakPointObserverService } from 'src/app/services/breakpoint-observer.service';

@Component({
  selector: 'app-personal-info-about-me',
  templateUrl: './personal-info-about-me.component.html',
  styleUrls: ['./personal-info-about-me.component.scss'],
})
export class PersonalInfoAboutMeComponent implements OnInit {
@ViewChild('contentWrapper') contentWrapper: ElementRef;
public aboutMeInfo: string = ABOUT_ME_INFO;
public isMonitor$:Observable<boolean> = of(true);
  constructor(private bpService: BreakPointObserverService) {}

 ngOnInit(): void {
     this.isMonitor$ = this.bpService.showContentForLarge$.pipe(tap(val => !!val));
 }
}
