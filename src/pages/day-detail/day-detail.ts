import { Component,OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {UserDataService} from "../../providers/user-data";

@Component({
  selector: 'page-day-detail',
  templateUrl: 'day-detail.html'
})
export class DayDetailPage {
  dayIndex: number;
  userWorkout: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private userDataService: UserDataService) {
    this.userWorkout = userDataService.userWorkout;
  }

  ngOnInit(){
    this.dayIndex = this.navParams.data;
  }

  customTrackBy(index: number, obj: any): any {
    return index;
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

}

