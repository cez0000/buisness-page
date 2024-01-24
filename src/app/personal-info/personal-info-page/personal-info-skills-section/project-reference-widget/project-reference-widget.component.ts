import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Skills } from 'src/app/enums/skills.enum';
import { REFERENCE_PROJECTS } from 'src/app/data/reference-projects';
import { ReferenceProjectModel } from 'src/app/models/reference-project.model';

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

 ngOnChanges(changes: SimpleChanges): void {
   if(Object.values(Skills).includes(changes['currentSkill'].currentValue))
     this.currentProject = this.projects.find(p => p.relatedSkill === this.currentSkill);
 }

 public getSrc(skill: Skills) {
  switch(skill) {
    case Skills.Angular:
      return '../../../../../assets/img/screen1.jpg'
    case Skills.React:
      return '../../../../../assets/img/reactappscreen.jpg'
    case Skills.Net:
      return '../../../../../assets/img/ddnet.jpg'
  }
 }
}
