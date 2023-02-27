import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LebenslaufComponent } from './components/lebenslauf/lebenslauf.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { CodeComponent } from './components/code/code.component'

@NgModule({
  declarations: [
    AppComponent,
    LebenslaufComponent,
    SkillsComponent,
    ProjectsComponent,
    NavigationComponent,
    AboutMeComponent,
    ImpressumComponent,
    ProgressBarComponent,
    CodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
