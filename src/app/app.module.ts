import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { JobListPage } from '../pages/job-list/job-list';
import { WelcomePage } from '../pages/welcome/welcome';
import { ProgressTrackerProvider } from '../providers/progress-tracker/progress-tracker';
import { HttpModule } from '@angular/http';
import {HistoryPage} from "../pages/history/history";
import {ReceptionPage} from "../pages/reception/reception";
import {OrganizationPage} from "../pages/organization/organization";
import {MissionPage} from "../pages/mission/mission";
import {HoursPage} from "../pages/hours/hours";
import {StrategyPage} from "../pages/strategy/strategy";
import {CommunicationPage} from "../pages/communication/communication";
import {FinishPage} from "../pages/finish/finish";


@NgModule({
  declarations: [
    MyApp,
    JobListPage,
    WelcomePage,
    HistoryPage,
    HoursPage,
    MissionPage,
    OrganizationPage,
    ReceptionPage,
    HistoryPage,
    StrategyPage,
    CommunicationPage,
    FinishPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    JobListPage,
    WelcomePage,
    HistoryPage,
    HoursPage,
    MissionPage,
    OrganizationPage,
    ReceptionPage,
    HistoryPage,
    StrategyPage,
    CommunicationPage,
    FinishPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProgressTrackerProvider
  ]
})
export class AppModule {}
