import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExerciseService } from '../../providers/exercise-service';
import { ExerciseItemPage } from "../exercises/exercises";
import {OverviewPage} from "../overview/overview";

@Component({
  selector: 'page-exerciseCategory',
  templateUrl: 'exerciseCategory.html'
})


export class ExerciseCategoryPage {
  category = ["failed","to connect"];
  workoutMap = {
    Abs: 14,
    Arms: 9,
    Back: 12,
    Calves: 7,
    Legs: 10,
    Chest: 4,
    Shoulders: 2
  };
  constructor(private navCtrl: NavController, private exerciseService: ExerciseService){
  }
  ionViewDidLoad() {
    this.exerciseService.load()
      .then(data => {
        this.category = data.results;
      })
  }
  showExercises(id: number, index: number){

    this.navCtrl.push(ExerciseItemPage,{id: id, index: index});

  }

  backToOverview(): void {
    this.navCtrl.push(OverviewPage);
  }

  getWorkoutId(name): number {
    return this.workoutMap[name];
  }

}





