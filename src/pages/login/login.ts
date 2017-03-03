import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {UserDataService} from "../../providers/user-data";
import {RegisterPage} from "../register/register";
import {OverviewPage} from "../overview/overview";


@Component ({
  templateUrl: 'login.html'
})

export class LoginPage {
  loginEmail: string;
  loginPassword: string;
  errorsBool: boolean = false;
  errorMessage: string;

  constructor(private nav: NavController, private userService: UserDataService, private toastController: ToastController){}

  loginUser(key: any, email: string, password: string, clicked: boolean) {

    let re: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //if keypress is the enter key
    if(key.keyCode == 13 || clicked) {
      if(email) {
        if(password) {
          //if password is at least 6 characters long
          if(password.length > 5) {
            //if email is a valid email
            if(re.test(email)) {
              this.userService.loginUser(email, password).then((data) => {
                //User sign in successful
                console.log("Login Successful: " + data.uid);

                this.userService.afterLogin(data).then(() =>{
                  this.nav.push(OverviewPage);
                });


                let toast = this.toastController.create({
                  duration: 3000,
                  message: "Login Successfull!",
                  position: "bottom"
                });

                toast.present();

                this.errorsBool = false;
                this.loginPassword = "";
              }, (errors) => {
                console.log(errors.message);
                this.errorsBool = true;
                this.errorMessage = errors.message;
                let toast = this.toastController.create({
                  duration: 3000,
                  message: "Login Failed",
                  position: "bottom"
                });

                toast.present();
                this.loginPassword = "";
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
    this.userService.faceBookLogin().then((data) => {

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        let token: any = data.credential.accessToken;
        // The signed-in user info.
        let user: any = data.user;
        console.log(user);
        // ...
      this.userService.afterFacebookLogin(data);
        this.nav.push(OverviewPage);
      },
      (errors) =>{
        console.log(errors.message);
        return false;
      });

  }
}
