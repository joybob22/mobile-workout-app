import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ExerciseService } from '../../providers/exercise-service';
import { UserDataService } from '../../providers/user-data';


@Component({
  selector: 'page-workoutEdit',
  templateUrl: 'workout.html',

})

export class WorkoutPage{
  private workout: any;
  private selectedExercises: any;
  private arrayOfKeys;


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

    console.log(this.selectedExercises);
  }
}
