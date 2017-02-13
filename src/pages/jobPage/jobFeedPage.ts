import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { JobFeedService } from '../../providers/job-feed-service'

@Component({
  selector: 'page-job-feed',
  providers : [JobFeedService],
  templateUrl: 'jobFeedPage.html'
})
export class JobFeedPage {

  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private jobService: JobFeedService,
    private loader: LoadingController) {

    let loadingUI = this.loader.create({ content: 'Please wait ...' });
    loadingUI.present();
    this.jobService.getFeed().then(data => {
      this.data = data.feed;
      loadingUI.dismiss();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobFeedPage');
  }

}
