import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { PersonalInfoPageComponent } from './personal-info/personal-info-page/personal-info-page.component';
import { PersonalInfoHeaderSectionComponent } from './personal-info/personal-info-page/personal-info-header-section/personal-info-header-section.component';
import { HeaderComponent } from './shared/header/header.component';
import { PersonalInfoSkillsSectionComponent } from './personal-info/personal-info-page/personal-info-skills-section/personal-info-skills-section.component';
import { HoverHighlightDirective } from './shared/Directives/hover-highlight.directive';
import { HeaderLogoComponent } from './threejs-components/header-logo/header-logo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxThreeModule } from 'ngx-three';
import { SkillLogoComponent } from './threejs-components/angular-logo/skill-logo-component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { PersonalInfoAboutMeComponent } from './personal-info/personal-info-page/personal-info-about-me-section/personal-info-about-me.component';
import { ProjectReferenceWidgetComponent } from './personal-info/personal-info-page/personal-info-skills-section/project-reference-widget/project-reference-widget.component';
import { PersonalInfoContactFormComponent } from './personal-info/personal-info-page/personal-info-contact-form/personal-info-contact-form.component';
import { MenuHamburgerComponent } from './shared/components/menu-hamburger/menu-hamburger.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoPageComponent,
    PersonalInfoHeaderSectionComponent,
    PersonalInfoSkillsSectionComponent,
    PersonalInfoAboutMeComponent,
    HeaderComponent,
    PersonalInfoSkillsSectionComponent,
    HoverHighlightDirective,
    HeaderLogoComponent,
    SkillLogoComponent,
    ProjectReferenceWidgetComponent,
    PersonalInfoContactFormComponent,
    MenuHamburgerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxThreeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatDialogModule
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackDrop: false}}],
  bootstrap: [AppComponent],
})
export class AppModule {}
