import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {UserDataService} from "../../providers/user-data";

@Component({
  selector: 'page-day-detail',
  templateUrl: 'day-detail.html'
})
export class DayDetailPage {
  index: number;
  userWorkout: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private userDataService: UserDataService) {
    this.index = this.navParams.data;
    this.userWorkout = userDataService.userWorkout;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DayDetailPage');
  }

  allWorkoutsComplete(): void{
    let allWorkouts = this.userWorkout[this.index].workouts.length;
    let finishedWorkOut = 0;
    for (let c = 0; c < allWorkouts; c++){
      if (this.userWorkout[this.index].workouts.completed === true){
        finishedWorkOut ++;
      }
    }
    if (allWorkouts === finishedWorkOut){
        this.userWorkout[this.index].workoutCompleted = true;
    }



  }

  // clearWorkout(index): void{
  //   this.userDataService.userWorkout[index].workouts[index].name = "";
  //   this.userDataService.userWorkout[index].workouts[index].amount = ;
  //
  // }

}

