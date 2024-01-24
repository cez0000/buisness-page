import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { BreakPointObserverService } from 'src/app/services/breakpoint-observer.service';

@Component({
  selector: 'app-personal-info-header-section',
  templateUrl: './personal-info-header-section.component.html',
  styleUrls: ['./personal-info-header-section.component.scss'],
})
export class PersonalInfoHeaderSectionComponent implements OnInit, AfterViewInit {
  @Output() goToEmitter: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('video') video: ElementRef;
  constructor(private bpObserverService: BreakPointObserverService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if(this.video) {
      this.video.nativeElement.muted = true;
      this.video.nativeElement.play();
    }
  }

  public get showMainPhoto():boolean {
    return this.bpObserverService.showContentForLarge$.getValue();
  }
}
