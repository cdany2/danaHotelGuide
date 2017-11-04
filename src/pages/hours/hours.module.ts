import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HoursPage } from './hours';

@NgModule({
  declarations: [
    HoursPage,
  ],
  imports: [
    IonicPageModule.forChild(HoursPage),
  ],
})
export class HoursPageModule {}
