import {Component} from "@angular/core/src/metadata/directives";
import {NavController, NavParams, ToastController} from "ionic-angular";
import {UserDataService} from "../../providers/user-data";
import {OverviewPage} from "../overview/overview";



var quotes = [
  "\"If you dream it, you can do it\" -Walt Disney",
  "\"Never, never, never give up.\" -Winston Churchill",
  "\"Believe you can and you're halfway there.\" -Theodore Roosevelt",
  "\"Eighty percent of success is showing up\" -Woody Allen",
  "\"The obstacle is the path\" -Zen Proverb",
  "\"If you have never failed you have never lived\" -Unknown",
  "You can do it!",
  "Hustle for that Muscle.",
  "Train insane or remain the same.",
  "*Insert cheesy quote here*"
];


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


  constructor(private nav: NavController, private userService: UserDataService, private navParams: NavParams, private toastController: ToastController) {
    this.exercises = this.navParams.data;
  }

  finish(): void {
    if(this.aDayIsSelected()) {
      var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      this.storeData();
      this.nav.push(OverviewPage);
      console.log(this.userService.userWorkout);
      this.errors = false;
      let toast = this.toastController.create({
        duration: 2500,
        message: randomQuote,
        position: "top"
      });

      toast.present();

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
