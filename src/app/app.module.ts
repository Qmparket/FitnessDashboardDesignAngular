import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SideContentComponent } from './side-content/side-content.component';
import { BannerComponent } from './main-content/banner/banner.component';
import { HeartMonitorComponent } from './main-content/heart-monitor/heart-monitor.component';
import { ChartModule } from 'primeng/chart';
import { DevicesComponent } from './main-content/devices/devices.component';
import { TitleComponent } from './shared/title/title.component';
import { ButtonOrangeOutlineComponent } from './shared/button-orange-outline/button-orange-outline.component';
import { DeviceComponent } from './main-content/devices/device/device.component';
import { StepsComponent } from './main-content/steps/steps.component';
import { IntensityMinutesComponent } from './main-content/intensity-minutes/intensity-minutes.component';
import { ChallengesComponent } from './main-content/challenges/challenges.component';
import { ImgWithTextComponent } from './main-content/challenges/img-with-text/img-with-text.component';
import { BadgesComponent } from './main-content/badges/badges.component';
import { CoursesComponent } from './main-content/courses/courses.component';
import { InputTextModule } from 'primeng/inputtext';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    MainContentComponent,
    SideContentComponent,
    BannerComponent,
    HeartMonitorComponent,
    DevicesComponent,
    TitleComponent,
    ButtonOrangeOutlineComponent,
    DeviceComponent,
    StepsComponent,
    IntensityMinutesComponent,
    ChallengesComponent,
    ImgWithTextComponent,
    BadgesComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    InputTextModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
