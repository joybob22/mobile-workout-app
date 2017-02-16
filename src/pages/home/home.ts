import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  /**
   * Once we have the login in page create code
   * that when the login button is pressed the
   * login page is added to the stack
   */
  goToLoginPage(): void {
    this.navCtrl.push(LoginPage)
  }

}
