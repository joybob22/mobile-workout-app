import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {UserDataService} from "../../providers/user-data";
import { Chart } from 'chart.js';
import {OverviewPage} from "../overview/overview";


@Component({
  selector: 'page-progress',
  templateUrl: 'progress.html'
})

export class ProgressPage {
  userWorkout: any;
  barChart: any;
  graphData: number[] = [0, 0, 0, 0, 0, 0, 0];

  constructor(public navCtrl: NavController, public navParams: NavParams, private userDataService: UserDataService) {
    this.userWorkout = userDataService.userWorkout;
  }

  @ViewChild('barCanvas') barCanvas;

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgressPage');

    let dayofweek = 0;
    let totalProgress = 0;
    let percentProgress = 0;
    // get userWorkout from service and create array of days completed (sun-sat)
    for (let index of this.userWorkout) {
      for(let exercise of index.workouts){
        if (exercise.completed == true){
          totalProgress++;
        }
      }

      if (totalProgress == 0) {
        percentProgress = 0;
      }
      else {
        percentProgress = totalProgress / index.workouts.length;
      }
      totalProgress = 0;

      if (index.workoutCompleted == true) {
        this.graphData[dayofweek] = 1;
      }
      else if (percentProgress > 0) {
        this.graphData[dayofweek] = percentProgress;
      }
      else if (index.workoutCompleted == false){
        this.graphData[dayofweek] = .01;
      }
      dayofweek++;
    }

    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',

      data: {
        xLabels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
        yLabels: ["", "Success!"],
        datasets: [{
          label: 'Success!',
          data: this.graphData,
          backgroundColor: [
            'green',
            'green',
            'green',
            'green',
            'green',
            'green',
            'green'
          ],
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              stepSize: 1,
              beginAtZero: true
            }
          }]
        }
      }

    });
    Chart.defaults.global.defaultColor = 'green';
  }

  backToOverview(): void {
    this.navCtrl.push(OverviewPage);
  }
}

