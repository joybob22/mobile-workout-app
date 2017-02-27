
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ExerciseService } from '../../providers/exercise-service';
import { ExerciseDetailModal } from "../exerciseDetail/exerciseDetail";
import { WorkoutPage } from "../workout/workout";

@Component({
  selector: 'page-exerciseItem',
  templateUrl: 'exercises.html'
})

export class ExerciseItemPage {
  private exercise: any;
  selectedExercises: any;

  constructor(private navCtrl: NavController, private exerciseService: ExerciseService, private navParams: NavParams){

  }


  openDetail(id: number, index: number){
    this.navCtrl.push(ExerciseDetailModal, {
      exerciseDetail: this.exercise[index]
    });
   }

   ionViewDidLoad(){
     this.exerciseService.getExercises(this.navParams.get('id')).then(()=> {
       this.exercise = this.exerciseService.exercise;
     });

   }

  editWorkout(){
    //display workout and choose reps and save workout
    this.navCtrl.push(ExerciseItemPage);
    this.navCtrl.push(WorkoutPage);
  }

  updateSelectedExercises(): any {
    this.selectedExercises = [];
    for(var i = 0; i < this.exercise.length; i++) {
      if(this.exercise[i].isSelected) {
        this.selectedExercises.push({
          //add anything else that needs to be stored
          name: this.exercise.name
        })
      }
    }
  }
}

