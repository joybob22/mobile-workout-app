import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserDataService} from "../../providers/user-data";


@Component ({
  templateUrl: 'register.html'

})

export class RegisterPage {
  registerEmail: string;
  registerPassword: string;
  registerConfirmPassword: string;

  constructor(private nav: NavController, private userService: UserDataService){}

  registerUser(): void {
    let email: string = this.registerEmail;
    let password: string = this.registerPassword;
    let CPass: string = this.registerConfirmPassword;
    let re: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(email) {
      if(password) {
        if(CPass) {
          if(password === CPass) {
            if(password.length > 5) {
              if(re.test(email)) {
                this.userService.registerUser(email, password);
              }
            }
          }
        }
      }
    }
  }
}
