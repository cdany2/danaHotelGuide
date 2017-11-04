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
      'HISTORIA DEL HOTEL': true,
      'MISIÓN, VISIÓN Y VALORES': true,
      'HORARIOS Y SALARIO': false,
      'SISTEMAS DE COMUNICACIÓN': true,
      'ORGANIGRAMA EMPRESARIAL': true,
      'LINEAS ESTRATEGICAS DE LA EMPRESA': true,
      'RECEPCIÓN': true,
    };
  }

  setJobAsReviewed(job) {
    this.progress_tracker[job] = true;
  }

  isJobReviewed(job){
    return this.progress_tracker[job];
  }

  didReviewAll(){
    for(let i in this.progress_tracker){
      if( this.progress_tracker[i] === false) return false;
    }
    return true;
  }

}
