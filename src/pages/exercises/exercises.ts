
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExerciseService } from '../../providers/exercise-service';
import { ExerciseDetailModal } from "../exerciseDetail/exerciseDetail";

@Component({
  selector: 'page-exerciseItem',
  templateUrl: 'exercises.html'
})

export class ExerciseItemPage {

  constructor(private navCtrl: NavController, private exerciseService: ExerciseService){
  }
  exercise = this.exerciseService.exercise;

  openDetail(id: number){
    this.navCtrl.push(ExerciseDetailModal, {
      id : id
    });
   }
}

