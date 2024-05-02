import {
    AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject, Subscription, fromEvent, tap } from 'rxjs';
import { COMERCIAL_PROJECTS } from 'src/app/data/comercial-projects';
import { CustomSlideComponent } from 'src/app/shared/components/custom-slide-component/custom-slide.component';
import { PopupComponent } from 'src/app/shared/components/popup/popup.component';

@Component({
  selector: 'app-personal-info-comercial',
  templateUrl: './personal-info-comercial-projects.component.html',
  styleUrls: [
    './personal-info-comercial-projects.component.scss',
    '../personal-info-skills-section/personal-info-skills-section.component.scss',
  ],
})
export class PersonalInfoComercialProjectsComponent implements OnInit, AfterViewInit {
  constructor(private dialog: MatDialog, private cdr: ChangeDetectorRef) {}
  public projects = COMERCIAL_PROJECTS;
  private currentPosition: number = 0;
  private elementWidth: number = 800;
  public currentProject: number = 0;
  private resizeObservable$: Observable<Event>
  private resizeSubscription$: Subscription
  private slideChange$: Subject<number> = new Subject<number>();
  @ViewChild('skillsWrapper') skillsWrapper: ElementRef;
  @ViewChild('contentWrapper') contentWrapper: ElementRef;
  @ViewChildren('slide') public slides;
  public arrayForSlideDots = [];

  ngOnInit(): void {
    this.slideChange$.asObservable().pipe(
      tap(num => {
        this.currentProject = num;
        this.cdr.detectChanges();
      })
    ).subscribe();
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( () => {      
      if(this.slides && this.slides?.first){
        this.setElementWidth();
        this.setCurrentPosition();
        this.setSliderPosition();
      } 
    })
  }

  ngAfterViewInit(): void {
    if(this.slides) {
      this.setElementWidth();
      this.setCurrentPosition();
      this.setSliderPosition()
      for(let i = 1; i <= this.projects.length; i++) {
        this.arrayForSlideDots.push(i)
      }
    }
  }

  public moveLeft() {
    if (this.currentPosition === 0) return;
    this.currentPosition += this.elementWidth;
    this.setCurrentProject();
    this.setSliderPosition();
  }

  public moveRight() {
    if (
      this.currentPosition ===
      -this.elementWidth * this.slides.length + this.elementWidth
    )
      return;
    this.currentPosition -= this.elementWidth;
    this.setCurrentProject();
    this.setSliderPosition();
  }
  public openInfoPopup(id:number):void {
    const slideData = this.projects.find(p => p.id === id);
    const data: {title: string, content: string} = {
     title: slideData.name,
     content: slideData.info[0]
    }
  this.dialog.open(PopupComponent, {data});
  }

  private setCurrentProject(): void {
    switch (this.currentPosition) {
      case 0:
        this.slideChange$.next(0);
        break;
      case -this.elementWidth * 2 + this.elementWidth:
        this.slideChange$.next(1);
        break;
      default:
        this.slideChange$.next(2);
    }
  }

  public getCurrentProject() {
    return this.projects.find(p => p.id === this.currentProject);
  }

  private setCurrentPosition(): void {
    switch (this.currentProject) {
      case 0:
        this.currentPosition = 0;
        break;
      case 1:
        this.currentPosition = -this.elementWidth * 2 + this.elementWidth;
        break;
      default:
        this.currentPosition = 0;
    }
  }
  private setSliderPosition(): void {
  console.log(this.contentWrapper.nativeElement)
  console.log(this.currentPosition)
    this.contentWrapper.nativeElement.style.transform = `translateX(${this.currentPosition}px)`;
  }

  private setElementWidth(): void {
    console.log(this.slides);
    
    this.elementWidth = this.slides.first?.nativeElement.offsetWidth;
  }

  public getStyleCondition(slide: number): boolean {
    switch (slide) {
      case 1:
        return this.currentPosition === 0;
      case 2:
        return (
          this.currentPosition === -this.elementWidth * 2 + this.elementWidth
        );
      case 3:
        return (
          this.currentPosition ===
          -this.elementWidth * this.slides?.length + this.elementWidth
        );
    }
    return false;
  }
}
