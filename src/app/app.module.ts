import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { DesafiosPage } from "../pages/desafios/desafios";
import { RegisterPage } from "../pages/register/register";
import { PerguntaPage } from "../pages/pergunta/pergunta";
import { ProvaPage } from "../pages/prova/prova";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import{QuizPage} from '../pages/quiz/quiz';
import{PerguntasQuizPage} from '../pages/perguntas-quiz/perguntas-quiz';
import {ProgressoPage} from '../pages/progresso/progresso';
import {RegistroPage} from '../pages/registro/registro';

import { FormsModule } from '@angular/forms';

import * as firebase from 'firebase';

var app = firebase.initializeApp({
  apiKey: "AIzaSyBQsMou8CwzNNRvpz6Xd8zti9dCl6spVLQ",
  authDomain: "trabmontanha-afa5c.firebaseapp.com",
  databaseURL: "https://trabmontanha-afa5c.firebaseio.com",
  projectId: "trabmontanha-afa5c",
  storageBucket: "trabmontanha-afa5c.appspot.com",
  messagingSenderId: "922779715590"
  });



import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DesafiosPage,
    RegisterPage,
    PerguntaPage,
    ProvaPage,
    QuizPage,
    PerguntasQuizPage,
    ProgressoPage,
    RegistroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DesafiosPage,
    RegisterPage,
    PerguntaPage,
    ProvaPage,
    QuizPage,
    PerguntasQuizPage,
    ProgressoPage,
    RegistroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
