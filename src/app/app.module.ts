import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { JobPage } from '../pages/jobPage/jobPage'
import { JobFeedPage } from '../pages/jobPage/jobFeedPage'
import { TalentPage } from '../pages/jobPage/talentPage'
import { AppointmentPage } from '../pages/jobPage/appointmentPage'

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2, JobPage, JobFeedPage, TalentPage, AppointmentPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2, JobPage, JobFeedPage, TalentPage, AppointmentPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
