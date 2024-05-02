import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';

interface SlideData {
    title: string;
    id: number;
    description: string;
    imgSrc: string;
}

@Component({
    selector: 'app-custom-slide',
    templateUrl: './custom-slide.component.html',
    styleUrls: ['./custom-slide.component.scss', '../../../personal-info/personal-info-page/personal-info-skills-section/personal-info-skills-section.component.scss']
})


export class CustomSlideComponent implements OnInit {
   @ViewChild('slide') public slide;
   @Input() public slideData: SlideData;
    constructor(private dialog: MatDialog) { }
    ngOnInit(): void {
    }

    public openInfoPopup():void {
    
        const data: {title: string, content: string} = {
         title: this.slideData.title,
         content: this.slideData.description
        }
      this.dialog.open(PopupComponent, {data});
      }
}