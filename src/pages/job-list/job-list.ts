import { Component } from '@angular/core';
import {ReceptionPage} from '../reception/reception'
import {ProgressTrackerProvider} from '../../providers/progress-tracker/progress-tracker';
import { NavController, NavParams } from 'ionic-angular';
import {HistoryPage} from "../history/history";
import {MissionPage} from "../mission/mission";
import {HoursPage} from "../hours/hours";
import {CommunicationPage} from "../communication/communication";
import {OrganizationPage} from "../organization/organization";
import {StrategyPage} from "../strategy/strategy";
import {FinishPage} from "../finish/finish";

/**
 * Generated class for the JobListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-job-list',
  templateUrl: 'job-list.html',
})
export class JobListPage {
  jobsMapper: any;
  objectKeys = Object.keys;

  constructor(public navCtrl: NavController, public navParams: NavParams, public  progressTrackerProvider: ProgressTrackerProvider) {
    this.jobsMapper = {
      'HISTORIA DEL HOTEL': HistoryPage,
      'MISIÓN, VISIÓN Y VALORES': MissionPage,
      'HORARIOS Y SALARIO': HoursPage,
      'SISTEMAS DE COMUNICACIÓN': CommunicationPage,
      'ORGANIGRAMA EMPRESARIAL': OrganizationPage,
      'LINEAS ESTRATEGICAS DE LA EMPRESA': StrategyPage,
      'RECEPCIÓN': ReceptionPage,
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobListPage');
  }

  public selectJob(job) {
    this.navCtrl.push(this.jobsMapper[job]);
    this.progressTrackerProvider.setJobAsReviewed(job);
  }

  public isJobReviewed(job) {
    return this.progressTrackerProvider.isJobReviewed(job);
  }

  public getJobItemClass(job) {
    return this.isJobReviewed(job) ? 'reviewed' : null;
  }

  public didReviewAll() {
    return !this.progressTrackerProvider.didReviewAll();
  }

  public moveToFinishPage() {
    this.navCtrl.push(FinishPage);
  }
}
