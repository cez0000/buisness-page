import { Component, OnInit, QueryList, ViewChild, ViewChildren, HostListener } from '@angular/core';
import { PersonalInfoSkillsSectionComponent } from './personal-info-skills-section/personal-info-skills-section.component';
import { BreakPointObserverService } from 'src/app/services/breakpoint-observer.service';

@Component({
  selector: 'app-personal-info-page',
  templateUrl: './personal-info-page.component.html',
  styleUrls: ['./personal-info-page.component.scss'],
})
export class PersonalInfoPageComponent implements OnInit {
  @ViewChildren('comp')
      comp: QueryList<any>;

  constructor(private breakpointObserverService: BreakPointObserverService) {}
public showScrollButton:boolean = false;
@HostListener('window:scroll', [])
onWindowScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  this.showScrollButton = scrollTop > 100;
}
  ngOnInit(): void {
    this.breakpointObserverService.initSubscriptions(); 
  }

  public get showMenuHamburger(): boolean {
   return !this.breakpointObserverService.showContentForLarge$.getValue()
  }

  public goToSection(i: number) {  
    let elementName = 'contentWrapper'
    if(i == 1) elementName = 'skillsWrapper'
    
    this.comp.get(i)[elementName].nativeElement.scrollIntoView({
      behavior: 'smooth', block: 'center'
    });
  }
  public scrollToTop() {
    console.log('hello');
    
    window.scrollTo({'top': 0})
  }
}
