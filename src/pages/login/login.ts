import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserDataService} from "../../providers/user-data";
import {RegisterPage} from "../register/register";
import {ExerciseCategoryPage} from "../exerciseCategory/exerciseCategory";


@Component ({
  templateUrl: 'login.html'

})

export class LoginPage {
  loginEmail: string;
  loginPassword: string;
  errorsBool: boolean = false;
  errorMessage: string;

  constructor(private nav: NavController, private userService: UserDataService){}

  loginUser(key: any, email: string, password: string) {

    let re: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //if keypress is the enter key
    if(key.keyCode == 13) {
      if(email) {
        if(password) {
          //if password is at least 6 characters long
          if(password.length > 5) {
            //if email is a valid email
            if(re.test(email)) {
              this.userService.loginUser(email, password).then((data) => {
                //User sign in successful
                console.log("Login Successful: " + data.uid);
                this.nav.push(ExerciseCategoryPage);
              }, (errors) => {
                console.log(errors.message);
                this.errorsBool = true;
                this.errorMessage = errors.message;
              });
            } else {
              this.errorsBool = true;
              this.errorMessage = "Invalid Email";
            }
          } else {
            this.errorsBool = true;
            this.errorMessage = "Password must be at least 6 characters long.";
          }
        } else {
          this.errorsBool = true;
          this.errorMessage = "Must enter a Password";
        }
      } else {
        this.errorsBool = true;
        this.errorMessage = "Must enter an email";
      }

    }
  }

  goToRegister(): void {
    this.nav.push(RegisterPage);
  }
  faceBookLogin(){
    this.userService.faceBookLogin();

  }
}
