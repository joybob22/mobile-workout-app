import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ExerciseCategoryPage} from "../exerciseCategory/exerciseCategory";
import {ProgressPage} from "../progress/progress";
import {UserDataService} from "../../providers/user-data";
import {DayDetailPage} from "../day-detail/day-detail";



@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html'
})
export class OverviewPage {

  userWorkout: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userDataService: UserDataService) {
    this.userWorkout = userDataService.userWorkout;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverviewPage');
  }

  goToExerciseCategory(): void {
    this.navCtrl.push(ExerciseCategoryPage);
  }

  goToCheckProgress(): void {
    this.navCtrl.push(ProgressPage);
  }

  goToDayDetail(index): void {
    this.navCtrl.push(DayDetailPage, index);
  }

  updateFirebase(): void {
    this.userDataService.updateFirebase();
  }
}
