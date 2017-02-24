import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ExerciseCategoryPage } from '../pages/exerciseCategory/exerciseCategory';
import { ExerciseService } from "../providers/exercise-service";
import { UserDataService } from "../providers/user-data";
import {RegisterPage} from "../pages/register/register";
import {ExerciseItemPage} from "../pages/exercises/exercises";
import {ExerciseDetailModal} from "../pages/exerciseDetail/exerciseDetail";
import { WorkoutPage } from "../pages/workout/workout";
import {OverviewPage} from "../pages/overview/overview";
import {ProgressPage} from "../pages/progress/progress";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ExerciseCategoryPage,
    ExerciseItemPage,
    ExerciseDetailModal,
    RegisterPage,
    WorkoutPage,
    RegisterPage,
    OverviewPage,
    ProgressPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ExerciseCategoryPage,
    ExerciseItemPage,
    ExerciseDetailModal,
    RegisterPage,
    WorkoutPage,
    RegisterPage,
    OverviewPage,
    ProgressPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ExerciseService, UserDataService ]
})
export class AppModule {}
