import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExerciseService } from '../../providers/exercise-service';

@Component({
  selector: 'page-exerciseCategory',
  templateUrl: 'exerciseCategory.html'
})


export class ExerciseCategoryPage {
  exercise = ["1","2"];
  constructor(private nav: NavController, private exerciseService: ExerciseService){
  }
  ionViewDidLoad() {
    this.exerciseService.load()
      .then(data => {
        this.exercise = data.results;
      })
  }
}



