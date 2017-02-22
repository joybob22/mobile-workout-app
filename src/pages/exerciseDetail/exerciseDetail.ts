import {ViewController} from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ExerciseService } from '../../providers/exercise-service';
import {Component} from "@angular/core";

@Component({
  selector: 'page-exerciseDetail',
  templateUrl: 'exerciseDetail.html'
})

export class ExerciseDetailModal {

  static get parameters() {
    return [ViewController];
  }

  constructor(private navCtrl: NavController, private exerciseService: ExerciseService, private viewCtrl: ViewController){

    this.viewCtrl = viewCtrl;
  }

  dismiss(data) {
    this.viewCtrl.dismiss();
  }

}

