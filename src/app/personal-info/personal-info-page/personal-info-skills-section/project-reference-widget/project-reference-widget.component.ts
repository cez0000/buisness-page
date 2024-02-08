import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Skills } from 'src/app/enums/skills.enum';
import { REFERENCE_PROJECTS } from 'src/app/data/reference-projects';
import { ReferenceProjectModel } from 'src/app/models/reference-project.model';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ImageShowUpComponent } from 'src/app/shared/components/image-show-up/image-show-up.component';

@Component({
  selector: 'app-project-reference-widget',
  templateUrl: './project-reference-widget.component.html',
  styleUrls: ['./project-reference-widget.component.scss']
})
export class ProjectReferenceWidgetComponent implements OnChanges {
@Input() currentSkill: Skills = Skills.Angular;
public imgSrc: string = '../../../../../assets/img/screen1.jpg';
public projectName: string = '';
private projects: ReferenceProjectModel[] = REFERENCE_PROJECTS;
public currentProject:ReferenceProjectModel = REFERENCE_PROJECTS[0];
public skills = Skills;
constructor(private dialog: MatDialog) {

}
 ngOnChanges(changes: SimpleChanges): void {
   if(Object.values(Skills).includes(changes['currentSkill'].currentValue))
     this.currentProject = this.projects.find(p => p.relatedSkill === this.currentSkill);
 }

 public showImage(skill:Skills) {
   const data = {
      src: this.getSrc(skill)
    }
  this.dialog.open(ImageShowUpComponent, {data})

 }

 public getSrc(skill: Skills) {
  switch(skill) {
    case Skills.Angular:
      return 'https://raw.githubusercontent.com/cez0000/buisness-page/master/src/assets/img/screen1.jpg'
    case Skills.React:
      return 'https://raw.githubusercontent.com/cez0000/buisness-page/master/src/assets/img/reactappscreen.jpg'
    case Skills.Net:
      return 'https://raw.githubusercontent.com/cez0000/buisness-page/master/src/assets/img/ddnet.jpg'
  }
 }
}
