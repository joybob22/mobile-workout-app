import {ViewController} from 'ionic-angular';
import {Component} from "@angular/core";

@Component({
  selector: 'page-exerciseDetail',
  templateUrl: 'exerciseDetail.html'
})

export class ExerciseDetailModal {

  static get parameters() {
    return [ViewController];
  }

  constructor(viewCtrl: ViewController) {
    this.viewCtrl = viewCtrl;
  }

  dismiss(data) {
    this.viewCtrl.dismiss();
  }

}

