import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExerciseService } from '../../providers/exercise-service';
import { ExerciseItemPage } from "../exercises/exercises";

@Component({
  selector: 'page-exerciseCategory',
  templateUrl: 'exerciseCategory.html'
})


export class ExerciseCategoryPage {
  category = ["failed","to connect"];
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
}





