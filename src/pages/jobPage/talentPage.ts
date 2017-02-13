import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { JobFeedService } from '../../providers/job-feed-service'
/*
  Generated class for the JobFeed page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-job-feed',
  templateUrl: 'talentPage.html',
  providers: [JobFeedService]
})
export class TalentPage {

  data: any;
  cacheData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private jobService: JobFeedService,
    private loader: LoadingController) {

    let loadingUI = this.loader.create({ content: 'Please wait ...' });
    loadingUI.present();
    this.jobService.getFeed().then(data => {
      this.data = data.candidates;
      this.cacheData = JSON.parse(JSON.stringify(this.data));
      loadingUI.dismiss();
    });
  }

  ionViewDidLoad() {
  }

  getItems(ev: any) {
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.data = this.data.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else {
      this.data = this.cacheData.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
