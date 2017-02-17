import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { ExerciseCategoryPage } from "../exerciseCategory/exerciseCategory";
import { ExerciseService } from "../../providers/exercise-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ExerciseService]
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  /**
   * Once we have the login in page create code
   * that when the login button is pressed the
   * login page is added to the stack
   */
  goToLoginPage(): void {
    this.navCtrl.push(LoginPage)
  }

  // can remove when button on homepage is removed
  goToExerciseCategory(): void {
    this.navCtrl.push(ExerciseCategoryPage);
  }

}
