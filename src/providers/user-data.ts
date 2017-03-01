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

  userWorkout:any;
  firebaseWorkout: any;

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

  afterRegister(data): any {
    firebase.database().ref('users/' + data.uid).set({
      firebaseWorkout: [
        {
          date: "Sunday",
          workoutCompleted: false,
          workouts: [" "]
        },
        {
          date: "Monday",
          workoutCompleted: false,
          workouts: [" "]
        },
        {
          date: "Tuesday",
          workoutCompleted: false,
          workouts: [" "]
        },
        {
          date: "Wednesday",
          workoutCompleted: false,
          workouts: [" "]
        },
        {
          date: "Thursday",
          workoutCompleted: false,
          workouts: [" "]
        },
        {
          date: "Friday",
          workoutCompleted: false,
          workouts: [" "]
        },
        {
          date: "Saturday",
          workoutCompleted: false,
          workouts: [" "]
        }
      ]
    });

    this.userWorkout = [
      {
        date: "Sunday",
        workoutCompleted: false,
        workouts: []
      },
      {
        date: "Monday",
        workoutCompleted: false,
        workouts: []
      },
      {
        date: "Tuesday",
        workoutCompleted: false,
        workouts: []
      },
      {
        date: "Wednesday",
        workoutCompleted: false,
        workouts: []
      },
      {
        date: "Thursday",
        workoutCompleted: false,
        workouts: []
      },
      {
        date: "Friday",
        workoutCompleted: false,
        workouts: []
      },
      {
        date: "Saturday",
        workoutCompleted: false,
        workouts: []
      }
    ];
  }

  loginUser(email, password): any {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  afterLogin(data): any {
    firebase.database().ref('/users/' + data.uid).once('value').then((snapshot) => {
      this.firebaseWorkout = snapshot.val().firebaseWorkout;
      this.takeOutSpaces(this.firebaseWorkout);
    });
  }

  takeOutSpaces(workouts): void {
    for(var i = 0; i < workouts.length; i++) {
      if(workouts[i].workouts[0] == " ") {
        workouts[i].workouts = [];
      }
    }
    this.userWorkout = workouts;
  };

  faceBookLogin(): any{
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    provider.setCustomParameters({
      'display': 'popup'
    });
    return firebase.auth().signInWithPopup(provider);
  }

  afterFacebookLogin(data): any {
    firebase.database().ref('/users/' + data.user.uid).once('value').then((snapshot) => {
      let exists = (snapshot.val() !== null);
      if(exists) {
        this.firebaseWorkout = snapshot.val().firebaseWorkout;
        this.takeOutSpaces(this.firebaseWorkout);
      } else {
        firebase.database().ref('users/' + data.user.uid).set({
          firebaseWorkout: [
            {
              date: "Sunday",
              workoutCompleted: false,
              workouts: [" "]
            },
            {
              date: "Monday",
              workoutCompleted: false,
              workouts: [" "]
            },
            {
              date: "Tuesday",
              workoutCompleted: false,
              workouts: [" "]
            },
            {
              date: "Wednesday",
              workoutCompleted: false,
              workouts: [" "]
            },
            {
              date: "Thursday",
              workoutCompleted: false,
              workouts: [" "]
            },
            {
              date: "Friday",
              workoutCompleted: false,
              workouts: [" "]
            },
            {
              date: "Saturday",
              workoutCompleted: false,
              workouts: [" "]
            }
          ]
        });

        this.userWorkout = [
          {
            date: "Sunday",
            workoutCompleted: false,
            workouts: []
          },
          {
            date: "Monday",
            workoutCompleted: false,
            workouts: []
          },
          {
            date: "Tuesday",
            workoutCompleted: false,
            workouts: []
          },
          {
            date: "Wednesday",
            workoutCompleted: false,
            workouts: []
          },
          {
            date: "Thursday",
            workoutCompleted: false,
            workouts: []
          },
          {
            date: "Friday",
            workoutCompleted: false,
            workouts: []
          },
          {
            date: "Saturday",
            workoutCompleted: false,
            workouts: []
          }
        ];
      }
    }, (errors) =>
      {
        console.log("Made it to error: " + errors);
      })
  }
}

