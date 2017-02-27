"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var firebase = require('firebase');
var UserDataService = (function () {
    function UserDataService() {
        //firebase initialization
        this.app = firebase.initializeApp({
            apiKey: "AIzaSyALHchzfyqeCK4zCjtug9EF3DxH9GEPG1E",
            authDomain: "workoutapp-ddc70.firebaseapp.com",
            databaseURL: "https://workoutapp-ddc70.firebaseio.com",
            storageBucket: "workoutapp-ddc70.appspot.com",
            messagingSenderId: "384184019598"
        });
        this.userWorkout = [
            {
                amount: 40,
                days: ["monday", "wednesday", "friday"],
                name: "Push ups"
            },
            {
                amount: 100,
                days: ["tuesday", "thursday", "saturday"],
                name: "Sit ups"
            },
            {
                amount: 20,
                days: ["monday", "friday"],
                name: "Pull ups"
            },
            {
                amount: 30,
                days: ["monday", "wednesday", "friday"],
                name: "Jumping Jacks"
            }
        ];
        this.error = null;
    }
    /**
     * Call when registering the user
     * Will config the user into firebase
     *
     * @param email
     * @param password
     */
    UserDataService.prototype.registerUser = function (email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    };
    UserDataService.prototype.loginUser = function (email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    };
    UserDataService.prototype.faceBookLogin = function () {
        var provider = new firebase.auth.FacebookAuthProvider();
        provider.addScope('user_birthday');
        provider.setCustomParameters({
            'display': 'popup'
        });
        return firebase.auth().signInWithPopup(provider);
    };
    UserDataService = __decorate([
        core_1.Injectable()
    ], UserDataService);
    return UserDataService;
}());
exports.UserDataService = UserDataService;
