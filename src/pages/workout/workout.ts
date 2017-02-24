import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ExerciseService } from '../../providers/exercise-service';
import { UserDataService } from '../../providers/user-data';


@Component({
  selector: 'page-workoutEdit',
  templateUrl: 'workout.html'
})

export class WorkoutPage{
  private workout: any;

  constructor(private navCtrl: NavController, private exerciseService: ExerciseService, private navParams: NavParams, private userDataService: UserDataService){

  }


  ionViewDidLoad(){
    //begin to fill array of objects
    //workout = userWorkout
  }

  scheduleWorkout(){
    //display calendar and save workout
  }
}
