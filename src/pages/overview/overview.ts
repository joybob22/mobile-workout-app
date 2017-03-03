import {Component, NgZone} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ExerciseCategoryPage} from "../exerciseCategory/exerciseCategory";
import {ProgressPage} from "../progress/progress";
import {UserDataService} from "../../providers/user-data";
import {DayDetailPage} from "../day-detail/day-detail";
import {Subscription} from "rxjs";




@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html'
})
export class OverviewPage {

  userWorkout: any;
  clearWorkout: any;
  clearSubscription: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userDataService: UserDataService, private zone: NgZone) {
    // this.userWorkout = userDataService.userWorkout;
    this.userWorkout = userDataService.get();
    this.clearSubscription = this.userDataService.clearVar$.subscribe(clearTarget => {
      this.clearWorkout = clearTarget;
    })
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

  clearAllWorkouts(index): void {
    this.userDataService.clearAllWorkouts(index);
    // this.userDataService.get().subscribe(data => {
    //   this.userWorkout = data;
    //  });
  }

}
