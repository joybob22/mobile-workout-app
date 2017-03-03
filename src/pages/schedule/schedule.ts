
import {Component} from "@angular/core/src/metadata/directives";
import {NavController, NavParams} from "ionic-angular";
import {UserDataService} from "../../providers/user-data";
import {OverviewPage} from "../overview/overview";


@Component({
  templateUrl: 'schedule.html'
})

export class SchedulePage {
  exercises: any;
  errors: boolean = false;
  errorMessage: string;
  daysOfTheWeek: any = [
    {
      day: "Sunday",
      isSelected: false
    },
    {
      day: "Monday",
      isSelected: false
    },
    {
      day: "Tuesday",
      isSelected: false
    },
    {
      day: "Wednesday",
      isSelected: false
    },
    {
      day: "Thursday",
      isSelected: false
    },
    {
      day: "Friday",
      isSelected: false
    },
    {
      day: "Saturday",
      isSelected: false
    }
  ];

  constructor(private nav: NavController, private userService: UserDataService, private navParams: NavParams) {
    this.exercises = this.navParams.data;
  }

  finish(): void {
    if(this.aDayIsSelected()) {
      this.storeData();
      this.userService.updateFirebase();
      this.nav.push(OverviewPage);
      console.log(this.userService.userWorkout);
      this.errors = false;
    } else {
      this.errors = true;
      this.errorMessage = "Please select a day"
    }
  }

  aDayIsSelected(): boolean {
    for(var i = 0; i < this.daysOfTheWeek.length; i++) {
      if(this.daysOfTheWeek[i].isSelected) {
        return true;
      }
    }

    return false;
  }


  backToOverview(): void {
    this.nav.push(OverviewPage);
  }

  storeData(): void {
    for(let i = 0; i < this.exercises.length; i++) {
      this.exercises[i].completed = false;
    }
    for(let i = 0; i < this.daysOfTheWeek.length; i++) {
      if(this.daysOfTheWeek[i].isSelected) {
        for(let j = 0; j < this.exercises.length; j++) {
          this.userService.userWorkout[i].workouts.push(this.exercises[j]);
        }
      }
    }
  }

}
