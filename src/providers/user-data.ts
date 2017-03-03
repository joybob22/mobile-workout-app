import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Subject, Observable, BehaviorSubject} from "rxjs";
import {OverviewPage} from "../pages/overview/overview";

export interface workout {
  date: string,
  workouts: workouts[]
}
export interface workouts{
  name: string,
  amount: number,
  completed: boolean
}

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

  _userWorkout = <BehaviorSubject< workout[] >> new BehaviorSubject([]);
  workoutStore: {
    workout: workout[];
  };

    // Observable.of(this.userWorkout);

  userWorkout = [
    {
      date: "Sunday",
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
      date: "Monday",
      workouts: [{
        name: "push-ups",
        amount: 60,
        completed: false
      }],
      workoutCompleted: false

    },
    {
      date: "Tuesday",
      workouts: [{
        name: "bicycle crunches",
        amount: 120,
        completed: false
      }],
      workoutCompleted: false

    },
    {
      date: "Wednesday",
      workouts: [{
        name: "push-ups",
        amount: 60,
        completed: false
      }],
      workoutCompleted: false

    },
    {
      date: "Thursday",
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
        name: "bicycle crunches",
        amount: 120,
        completed: false
      }],
      workoutCompleted: false

    },
    {
      date: "Saturday",
      workouts: [{
        name: "bicycle crunches",
        amount: 120,
        completed: false
      }],
      workoutCompleted: false

    }
  ];

  error = null;

  clearVar = new Subject<any>();
  clearVar$ = this.clearVar.asObservable();
  updateClear: any;

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

  get(): any {
    this.workoutStore = {workout: []};
    this.workoutStore.workout = this.userWorkout;
    this._userWorkout.next(Object.assign({}, this.workoutStore).workout);
    return this._userWorkout.asObservable();
  }

  clearAllWorkouts(index): void {
    this.userWorkout[index].workouts = [];
    this._userWorkout.next(Object.assign({}, this.workoutStore).workout);

    //return this.clearVar.next(this.updateClear);
  }
}
