import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()

/**
 * This file will hold all user data
 * Will also be the config for firebase(login/register/logout)
 *
 * Use this service when anything needs to be saved and when any data needs to be manipulated
 *
 * Ignore the firebase errors, they are resolved when the typescript is compiled to javascript
 */

export class UserDataService {
  //firebase initialization
  app = firebase.initializeApp({
    apiKey: "AIzaSyALHchzfyqeCK4zCjtug9EF3DxH9GEPG1E",
    authDomain: "workoutapp-ddc70.firebaseapp.com",
    databaseURL: "https://workoutapp-ddc70.firebaseio.com",
    storageBucket: "workoutapp-ddc70.appspot.com",
    messagingSenderId: "384184019598"
  });

  constructor(){}

  /**
   * Call when registering the user
   * Will config the user into firebase
   *
   * @param email
   * @param password
   */
  registerUser(email, password): void {
    firebase.auth().createUserWithEmailAndPassword(email, password).then((data) => {
      //success function

      console.log("A user with this ID was added. " + data.uid);
    }, (errors) => {
      //error function
      console.log(errors.message);
    });
  }

  loginUser(email, password): void {
    firebase.auth().signInWithEmailAndPassword(email, password).then((data) => {
      //User sign in successful
      console.log("Login Successful: " + data.uid);
    }, (errors) => {
      console.log(errors.message);
    })
  }
  faceBookLogin(){
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    provider.setCustomParameters({
      'display': 'popup'
    });
    firebase.auth().signInWithPopup(provider).then((data) => {

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      let token: any = data.credential.accessToken;
      // The signed-in user info.
      let user: any = data.user;
      console.log(user);
      // ...
    },
    (errors) =>(console.log(errors.message)))
  }
}
