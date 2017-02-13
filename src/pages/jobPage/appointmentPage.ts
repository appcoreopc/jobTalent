import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { JobFeedService } from '../../providers/job-feed-service'

@Component({
  selector: 'page-job-feed',
  templateUrl: 'appointmentPage.html',
  providers: [JobFeedService]
})
export class AppointmentPage {

  data: any;
  cacheData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private jobService: JobFeedService,
    private loader: LoadingController) {

    let loadingUI = this.loader.create({ content: 'Please wait ...' });
    loadingUI.present();
    this.jobService.getFeed().then(data => {
      this.data = data.appointments;
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
