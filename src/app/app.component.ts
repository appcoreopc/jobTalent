import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { JobPage } from "../pages/jobPage/jobPage"
import { SettingsPage } from '../pages/settings/settings'
import { AppointmentPage } from "../pages/jobPage/appointmentPage"


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = JobPage;
  pages: Array<{ title: string, component: any, icon: string }>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: JobPage, icon: 'md-home' },
      //    { title: 'My Profile', component: ProfilePage, icon : 'md-person' },
      { title: 'Messages', component: JobPage, icon: 'md-mail' },
      { title: 'Feed Filter', component: JobPage, icon: 'md-star-outline' },
      { title: 'Appointments', component: AppointmentPage, icon: 'md-calendar' },
      { title: 'Settings', component: SettingsPage, icon: 'md-options' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
