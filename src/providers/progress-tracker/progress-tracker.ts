import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProgressTrackerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProgressTrackerProvider {
  progress_tracker: any;

  constructor(public http: Http) {
    this.progress_tracker = {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false
    };
  }

  setJobAsReviewd(job) {
    this.progress_tracker[job] = true;
  }

  isJobReviewd(job){
    return this.progress_tracker[job];
  }

  didReviewAll(){
    for(let i in this.progress_tracker){
      if( this.progress_tracker[i] === false) return false;
    }
    return true;
  }

}
