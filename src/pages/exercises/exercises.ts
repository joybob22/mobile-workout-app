
import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { ExerciseService } from '../../providers/exercise-service';
import { ExerciseDetailModal } from "../exerciseDetail/exerciseDetail";

@Component({
  selector: 'page-exerciseItem',
  templateUrl: 'exercises.html'
})

export class ExerciseItemPage {
  private exercise: any;

  constructor(private navCtrl: NavController, private exerciseService: ExerciseService, private navParams: NavParams){

  }


  openDetail(id: number, index: number){
    this.navCtrl.push(ExerciseDetailModal, {
      exerciseDetail: this.exercise[index]
    });
   }

   ionViewDidLoad(){
     this.exerciseService.getExercises(this.navParams.get('id')).then(()=>
     this.exercise = this.exerciseService.exercise);
   }
}

