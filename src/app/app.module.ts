import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoPageComponent } from './personal-info/personal-info-page/personal-info-page.component';
import { PersonalInfoHeaderSectionComponent } from './personal-info/personal-info-page/personal-info-header-section/personal-info-header-section.component';
import { HeaderComponent } from './shared/header/header.component';
import { PersonalInfoSkillsSectionComponent } from './personal-info/personal-info-page/personal-info-skills-section/personal-info-skills-section/personal-info-skills-section.component';
import { HoverHighlightDirective } from './shared/header/hover-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoPageComponent,
    PersonalInfoHeaderSectionComponent,
    PersonalInfoSkillsSectionComponent,
    HeaderComponent,
    PersonalInfoSkillsSectionComponent,
    HoverHighlightDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
