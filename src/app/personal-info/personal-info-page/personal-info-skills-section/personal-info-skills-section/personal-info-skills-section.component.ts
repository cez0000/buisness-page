import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  ElementRef,
  AfterViewInit,
  QueryList,
} from '@angular/core';
import { query } from '@angular/animations';

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
  currentPosition: number = -800;
  elementWidth: number = 800;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.contentWrapper)
      this.contentWrapper.nativeElement.style.transform = `translateX(${this.currentPosition}px)`;
  }

  moveLeft() {
    if (this.currentPosition === 0) return;
    this.currentPosition += this.elementWidth;
    this.contentWrapper.nativeElement.style.transform = `translateX(${this.currentPosition}px)`;
  }

  moveRight() {
    if (
      this.currentPosition ===
      -this.elementWidth * this.slides.length + this.elementWidth
    )
      return;
    this.currentPosition -= this.elementWidth;
    this.contentWrapper.nativeElement.style.transform = `translateX(${this.currentPosition}px)`;
  }
}
