/**
 * Created by kendratate on 2/17/17.
 */import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExerciseService } from '../../providers/exercise-service';

@Component({
  selector: 'page-exerciseItem',
  templateUrl: 'exercises.html'
})


export class ExerciseItemPage {

  constructor(private nav: NavController, private exerciseService: ExerciseService){
  }

  exercise = this.exerciseService.exercise;

}
