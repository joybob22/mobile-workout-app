import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ExerciseService } from '../../providers/exercise-service';
import { UserDataService } from '../../providers/user-data';
import {SchedulePage} from "../schedule/schedule";
import {OverviewPage} from "../overview/overview";


@Component({
  selector: 'page-workoutEdit',
  templateUrl: 'workout.html',

})

export class WorkoutPage{
  private workout: any;
  private selectedExercises: any;
  private arrayOfKeys;
  errors: boolean = false;
  errorMessage: string;


  constructor(private navCtrl: NavController, private exerciseService: ExerciseService, private navParams: NavParams, private userDataService: UserDataService){
    this.selectedExercises = navParams.get('selectedExercises');
    this.arrayOfKeys = Object.keys(this.selectedExercises);
  }

  ionViewDidLoad(){
    //begin to fill array of objects
    //workout = userWorkout
  }

  scheduleWorkout(){
    //display calendar and save workout
    if(this.formValidated()) {
      this.navCtrl.push(SchedulePage,this.selectedExercises);
      this.errors = false;
    } else {
      this.errorMessage = "Must enter a number for all workouts";
      this.errors = true;
    }

    console.log(this.selectedExercises);
  }

  backToOverview(): void {
    this.navCtrl.push(OverviewPage);
  }

  formValidated(): boolean {
    let good = 0;
    for(let i = 0; i < this.selectedExercises.length; i++) {
      if(this.selectedExercises[i].amount) {
        good++;
      }
    }
    if(good === this.selectedExercises.length) {
      return true;
    }
    return false;
  }
}
