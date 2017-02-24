import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ExerciseCategoryPage} from "../exerciseCategory/exerciseCategory";
import {ProgressPage} from "../progress/progress";
import {UserDataService} from "../../providers/user-data";



@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html'
})
export class OverviewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private userDataService: UserDataService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverviewPage');
  }

  goToExerciseCategory(): void {
    this.navCtrl.push(ExerciseCategoryPage);
  }

  goToCheckProgress(): void {
    this.navCtrl.push(ProgressPage);
  }
}
