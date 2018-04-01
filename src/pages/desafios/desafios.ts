import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerguntaPage } from "../pergunta/pergunta";
import { HomePage } from '../../pages/home/home';
import {ProvaPage} from '../../pages/prova/prova'
import {QuizPage} from '../../pages/quiz/quiz';
import {ProgressoPage} from '../../pages/progresso/progresso'
/**
 * Generated class for the DesafiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-desafios',
  templateUrl: 'desafios.html',
})
export class DesafiosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DesafiosPage');
  }

  backToLogin(){
    this.navCtrl.push(HomePage);
  }

  startProva(){
    this.navCtrl.push(ProvaPage);
  }

  startQuizz(){
    this.navCtrl.push(QuizPage);
  }
  Progresso(){
    this.navCtrl.push(ProgressoPage);
  }
}
