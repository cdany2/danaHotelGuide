import { Component } from '@angular/core';
import {ResturantPage} from '.././resturant/resturant';
import {ReceptionPage} from '.././reception/reception'
import {ProgressTrackerProvider} from '../../providers/progress-tracker/progress-tracker';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {componentFactoryName} from "@angular/compiler";

/**
 * Generated class for the JobListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job-list',
  templateUrl: 'job-list.html',
})
export class JobListPage {
  componentsMap: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public  progressTrackerProvider: ProgressTrackerProvider) {
    this.componentsMap = {
      restaurant: ResturantPage,
      reception: ReceptionPage
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobListPage');
  }

  public selectJob(job) {
    this.progressTrackerProvider.setJobAsReviewd(job);
    this.navCtrl.push(this.componentsMap[job]);
  }

}
