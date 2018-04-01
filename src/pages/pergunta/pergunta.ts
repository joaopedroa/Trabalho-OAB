import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DesafiosPage } from "../../pages/desafios/desafios";
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the PerguntaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pergunta',
  templateUrl: 'pergunta.html',
})
export class PerguntaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntaPage');
  }

  desafios(){
    this.navCtrl.push(DesafiosPage);
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


  ok(teste){
    if(!teste){
     this.presentAlertError() ; ;
    }else{
      this.presentAlert() ;
    }
    
  }
}
