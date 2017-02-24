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

  userWorkout = [
    {
      date: "Monday",
      workouts: [{
          name: "push-ups",
          amount: 50,
          completed: false
        },
        {
          name: "sit-ups",
          amount: 30,
          completed: false
        }
      ],

      workoutCompleted: false

    },
    {
      date: "Tuesday",
      workouts: [{
        name: "push-ups",
        amount: 60,
        completed: false
      }],
      workoutCompleted: false

    },
    {
      date: "Wednesday",
      workouts: [{
        name: "bicycle crunches",
        amount: 120,
        completed: false
      }],
      workoutCompleted: false

    },
    {
      date: "Friday",
      workouts: [{
        name: "push-ups",
        amount: 60,
        completed: false
      }],
      workoutCompleted: false

    },
  ];

  error = null;

  constructor(){}

  /**
   * Call when registering the user
   * Will config the user into firebase
   *
   * @param email
   * @param password
   */
  registerUser(email, password): any{
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  loginUser(email, password): any {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
  faceBookLogin(): any{
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    provider.setCustomParameters({
      'display': 'popup'
    });
    return firebase.auth().signInWithPopup(provider);
  }
}
