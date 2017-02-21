import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserDataService} from "../../providers/user-data";
import {RegisterPage} from "../register/register";


@Component ({
  templateUrl: 'login.html'

})

export class LoginPage {
  loginEmail: string;
  loginPassword: string;

  constructor(private nav: NavController, private userService: UserDataService){}

  loginUser(key: any, email: string, password: string) {

    let re: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //if keypress is the enter key
    if(key.keyCode == 13) {
      //if password is at least 6 characters long
      if(password.length > 5) {
        //if email is a valid email
        if(re.test(email)) {
          this.userService.loginUser(email, password);
        }
      }
    }
  }

  goToRegister(): void {
    this.nav.push(RegisterPage);
  }
}
