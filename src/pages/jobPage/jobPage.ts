import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { JobFeedPage } from './jobFeedPage'
import { TalentPage } from './talentPage'

@Component({
  selector: 'page-job-feed',
  templateUrl: 'jobPage.html'
})
export class JobPage {

  feedPage : any; 
  talentPage : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.feedPage = JobFeedPage;  
    this.talentPage = TalentPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobFeedPage');
  }

}
