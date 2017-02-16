import { Component } from '@angular/core';

import { ExerciseService } from '../../providers/exercise-service/exercise-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ExerciseService]
})


export class HomePage {
  public exercise: any;

  constructor(public exerciseService: ExerciseService) {
    this.loadExerciseCategory();
  };


  loadExerciseCategory() {
    this.exerciseService.load()
      .then(data => {
        this.exercise = data;
      })
  }
}
