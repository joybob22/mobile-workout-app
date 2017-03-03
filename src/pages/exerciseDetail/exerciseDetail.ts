import {ViewController, NavParams} from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ExerciseService } from '../../providers/exercise-service';
import {Component} from "@angular/core";
import {OverviewPage} from "../overview/overview";
import {ExerciseItemPage} from "../exercises/exercises";

@Component({
  selector: 'page-exerciseDetail',
  templateUrl: 'exerciseDetail.html'
})

export class ExerciseDetailModal {
  exerciseDetail: any;

  // static get parameters() {
  //   return [ViewController];
  // }

  constructor(private navCtrl: NavController, private exerciseService: ExerciseService, private viewCtrl: ViewController, private navParams: NavParams){

    this.viewCtrl = viewCtrl;
    console.log(this.exerciseDetail);
    this.exerciseDetail = this.navParams.get('exerciseDetail')
  }

  ionViewDidLoad(){
    this.exerciseDetail = this.navParams.get('exerciseDetail')
  }

}

