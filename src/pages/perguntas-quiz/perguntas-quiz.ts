import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the PerguntasQuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perguntas-quiz',
  templateUrl: 'perguntas-quiz.html',
})
export class PerguntasQuizPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntasQuizPage');
  }


  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Parabéns!!!',
      subTitle: 'A resposta está correta. Continue jogando.',
      
      buttons: ['Ok']
    });
    alert.present();
  }
  presentAlertError() {
    let alert = this.alertCtrl.create({
      title: 'Que pena!',
      subTitle: 'A resposta está errada.',
      
      buttons: ['Ok']
    });
    alert.present();
  }
  presentAlertInadequada() {
    let alert = this.alertCtrl.create({
      title: 'Que pena!',
      subTitle: 'A resposta está errada.',
      
      buttons: ['Ok']
    });
    alert.present();
  }

  ok(teste){
    if(!teste){
      this.presentAlertError();
    }else{
      this.presentAlert();
    }
  }

 

}
