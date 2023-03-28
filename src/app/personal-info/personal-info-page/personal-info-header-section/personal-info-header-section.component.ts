import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-personal-info-header-section',
  templateUrl: './personal-info-header-section.component.html',
  styleUrls: ['./personal-info-header-section.component.scss'],
})
export class PersonalInfoHeaderSectionComponent implements OnInit {
  @Output() goToEmitter: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  goToSkills() {
    this.goToEmitter.emit();
  }
}
