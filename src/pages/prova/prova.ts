import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PerguntaPage} from '../pergunta/pergunta'
/**
 * Generated class for the ProvaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prova',
  templateUrl: 'prova.html',
})
export class ProvaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProvaPage');
  }

  public perguntas(){
    this.navCtrl.push(PerguntaPage);
  }
}
