"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
/*
  Generated class for the ExerciseService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ExerciseService = (function () {
    function ExerciseService(http) {
        this.http = http;
        console.log('Hello ExerciseService Provider');
    }
    ExerciseService.prototype.load = function () {
        var _this = this;
        if (this.data) {
            // already loaded data
            return Promise.resolve(this.data);
        }
        // don't have the data yet
        return new Promise(function (resolve) {
            // We're using Angular HTTP provider to request the data,
            // then on the response, it'll map the JSON data to a parsed JS object.
            // Next, we process the data and resolve the promise with the new data.
            _this.http.get('http://wger.de/api/v2/exercisecategory')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    ExerciseService.prototype.getExercises = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            // We're using Angular HTTP provider to request the data,
            // then on the response, it'll map the JSON data to a parsed JS object.
            // Next, we process the data and resolve the promise with the new data.
            _this.http.get('http://wger.de/api/v2/exercise/?language=2&muscles=' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (exercise) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                _this.exercise = exercise.results;
                resolve(_this.exercise);
            });
        });
    };
    ExerciseService = __decorate([
        core_1.Injectable()
    ], ExerciseService);
    return ExerciseService;
}());
exports.ExerciseService = ExerciseService;
