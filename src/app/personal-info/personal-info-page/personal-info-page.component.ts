import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonalInfoSkillsSectionComponent } from './personal-info-skills-section/personal-info-skills-section/personal-info-skills-section.component';

@Component({
  selector: 'app-personal-info-page',
  templateUrl: './personal-info-page.component.html',
  styleUrls: ['./personal-info-page.component.scss'],
})
export class PersonalInfoPageComponent implements OnInit {
  @ViewChild('personalSkills')
  personalSkills: PersonalInfoSkillsSectionComponent;
  constructor() {}

  ngOnInit(): void {}
  goToSection(i: number) {
    this.personalSkills.skillsWrapper.nativeElement.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
