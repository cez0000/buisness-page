import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import { SKILLS } from 'src/app/data/skills';
import { SkillsModel } from 'src/app/models/skills-model';
import {MatDialog} from '@angular/material/dialog'
import { PopupComponent } from 'src/app/shared/components/popup/popup.component';
import { Skills } from 'src/app/enums/skills.enum';
import { Observable, Subject, tap, Subscription, fromEvent, delay } from 'rxjs';

@Component({
  selector: 'app-personal-info-skills-section',
  templateUrl: './personal-info-skills-section.component.html',
  styleUrls: ['./personal-info-skills-section.component.scss'],
})
export class PersonalInfoSkillsSectionComponent
  implements OnInit, AfterViewInit
{
  @ViewChild('skillsWrapper') skillsWrapper: ElementRef;
  @ViewChild('contentWrapper') contentWrapper: ElementRef;
  @ViewChildren('slides') slides: QueryList<ElementRef>;
  private resizeObservable$: Observable<Event>
  private resizeSubscription$: Subscription
  skillsData: SkillsModel[] = SKILLS;
  currentPosition: number = 0;
  elementWidth: number = 800;
  public currentSkill: Skills = Skills.Angular;
  public arrayForSlideDots = [];
  private slideChange$: Subject<Skills> = new Subject<Skills>()
  constructor(private dialog: MatDialog, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.slideChange$.asObservable().pipe(
      tap(num => {
        this.currentSkill = num;
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
      for(let i = 1; i <= this.skillsData.length; i++) {
        this.arrayForSlideDots.push(i)
      }
    }
  }

  public moveLeft() {
    if (this.currentPosition === 0) return;
    this.currentPosition += this.elementWidth;
    this.setCurrentSkill()
    this.setSliderPosition();
  }

  public moveRight() {
    if (this.currentPosition === -this.elementWidth * this.slides.length + this.elementWidth) return;
    this.currentPosition -= this.elementWidth;
    this.setCurrentSkill()
    this.setSliderPosition();
  }

  private setCurrentSkill(): void {
    switch(this.currentPosition) {
      case 0: 
       this.slideChange$.next(Skills.Angular);
      break;
      case -this.elementWidth * 2 + this.elementWidth:
       this.slideChange$.next(Skills.React);
      break;
      default:
        this.slideChange$.next(Skills.Net) 

    }
  }

  private setCurrentPosition(): void {
    switch(this.currentSkill) {
      case Skills.Angular:
        this.currentPosition = 0
        break;
      case Skills.React:
        this.currentPosition = -this.elementWidth * 2 + this.elementWidth
        break;
      case Skills.Net:
        this.currentPosition = -this.elementWidth * this.slides.length + this.elementWidth
        break;
        default:
          this.currentPosition = 0

    }
  }
  private setSliderPosition(): void {
    this.contentWrapper.nativeElement.style.transform = `translateX(${this.currentPosition}px)`;
  }

  private setElementWidth(): void {
    console.log(this.slides.first.nativeElement.offsetWidth);
    
    this.elementWidth = this.slides.first.nativeElement.offsetWidth;
  }

  public getStyleCondition(slide: number):boolean {
     switch(slide) {
      case 1: 
        return this.currentPosition === 0;
      case 2: 
      return this.currentPosition === -this.elementWidth * 2 + this.elementWidth;
      case 3:
        return this.currentPosition === -this.elementWidth * this.slides?.length + this.elementWidth 
     }
     return false
  }

  public openInfoPopup(skillID: Skills):void {
    const skill: SkillsModel = this.skillsData.find(s => s.id === skillID)
    const data: {title: string, content: string} = {
     title: skill.name,
     content: skill.info
    }
  this.dialog.open(PopupComponent, {data});
  }

}
