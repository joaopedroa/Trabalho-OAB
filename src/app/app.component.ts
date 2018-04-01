import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DesafiosPage } from "../pages/desafios/desafios";
import { RegisterPage } from "../pages/register/register";
import { PerguntaPage } from "../pages/pergunta/pergunta";
import { ProvaPage} from "../pages/prova/prova";
import {QuizPage} from "../pages/quiz/quiz";
import{PerguntasQuizPage} from '../pages/perguntas-quiz/perguntas-quiz';
import {ProgressoPage} from '../pages/progresso/progresso';
import {RegistroPage} from '../pages/registro/registro'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Desafios', component: DesafiosPage},
      {title: 'Cadastro', component: RegisterPage},
      {title: 'Perguntas', component: PerguntaPage},
      {title: 'Prova', component: ProvaPage},
      {title: 'Quiz', component: QuizPage},
      {title: 'PerguntasQuiz', component: PerguntasQuizPage},
      {title: 'Progresso', component: ProgressoPage},
      {title: 'Registro', component: RegistroPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
