import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {UserDataService} from "../../providers/user-data";
import {ExerciseCategoryPage} from "../exerciseCategory/exerciseCategory";


@Component({
  templateUrl: 'register.html'

})

export class RegisterPage {
  registerEmail: string;
  registerPassword: string;
  registerConfirmPassword: string;
  errors: boolean = false;
  errorMessage: string;

  constructor(private nav: NavController, private userService: UserDataService, private toastController: ToastController) {
  }

  registerUser(): void {
    let email: string = this.registerEmail;
    let password: string = this.registerPassword;
    let CPass: string = this.registerConfirmPassword;
    let re: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email) {
      if (password) {
        if (CPass) {
          if (password === CPass) {
            if (password.length > 5) {
              if (re.test(email)) {
                this.userService.registerUser(email, password).then((data) => {
                  //success function
                  console.log("A user with this ID was added. " + data.uid);
                  this.userService.afterRegister(data);
                  this.nav.push(ExerciseCategoryPage);
                  let toast = this.toastController.create({
                    duration: 3000,
                    message: "Registration Successfull!",
                    position: "bottom"
                  });

                  toast.present();
                  this.errors = false;
                  this.registerPassword = "";
                  this.registerConfirmPassword = "";
                }, (errors) => {
                  //error function
                  console.log(errors.message);
                  this.errors = true;
                  this.errorMessage = errors.message;
                  let toast = this.toastController.create({
                    duration: 3000,
                    message: "Registration Failed",
                    position: "bottom"
                  });

                  toast.present();
                  this.registerPassword = "";
                  this.registerConfirmPassword = "";
                });
              } else {
                this.errors = true;
                this.errorMessage = "Invalid Email";
              }
            } else {
              this.errors = true;
              this.errorMessage = "Password must be at least 6 characters long";
            }
          } else {
            this.errors = true;
            this.errorMessage = "Password and Confirm Password are different";
          }
        } else {
          this.errors = true;
          this.errorMessage = "Need to confirm password";
        }
      } else {
        this.errors = true;
        this.errorMessage = "Must have a password";
      }
    } else {
      this.errors = true;
      this.errorMessage = "Must have an email address";
    }
  }
}
