import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LebenslaufComponent} from './components/lebenslauf/lebenslauf.component';
import {SkillsComponent} from './components/skills/skills.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {AboutMeComponent} from './components/about-me/about-me.component';
import {ImpressumComponent} from './components/impressum/impressum.component';
import {CodeComponent} from './components/code/code.component';

const routes: Routes = [
  { path: '',   redirectTo: '/aboutme', pathMatch: 'full' },
  { path: 'lebenslauf', component: LebenslaufComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'aboutme', component: AboutMeComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'code', component: CodeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
