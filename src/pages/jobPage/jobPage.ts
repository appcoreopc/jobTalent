import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { JobFeedPage } from './jobFeedPage'
import { TalentPage } from './talentPage'
import { AppointmentPage } from './appointmentPage'

@Component({
  selector: 'page-job-feed',
  templateUrl: 'jobPage.html'
})
export class JobPage {

  feedPage : any; 
  talentPage : any;
  appointmentPage : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.feedPage = JobFeedPage;  
    this.talentPage = TalentPage;
    this.appointmentPage = AppointmentPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobFeedPage');
  }

}
