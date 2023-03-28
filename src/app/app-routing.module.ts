import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInfoPageComponent } from './personal-info/personal-info-page/personal-info-page.component';

const routes: Routes = [{ path: '', component: PersonalInfoPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
