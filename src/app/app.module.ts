import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './common/nav/nav.component';
import { FooterComponent } from './common/footer/footer.component';
import { MainVisualComponent } from './home/main-visual/main-visual.component';
import { KeynotesComponent } from './home/keynotes/keynotes.component';
import { ScheduleComponent } from './home/schedule/schedule.component';
import { TeamComponent } from './home/team/team.component';
import { SponsorsComponent } from './home/sponsors/sponsors.component';
import { AboutComponent } from './home/about/about.component';
import { SpecialThanksComponent } from './home/special-thanks/special-thanks.component';
import { BecomeASpeakerComponent } from './home/main-visual/become-a-speaker/become-a-speaker.component';



@NgModule({
  declarations: [
  AppComponent, HomeComponent, NavComponent, FooterComponent,
  MainVisualComponent, KeynotesComponent, ScheduleComponent,
    TeamComponent, SponsorsComponent, AboutComponent, SpecialThanksComponent, BecomeASpeakerComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
