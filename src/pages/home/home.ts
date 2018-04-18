import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DesafiosPage } from "../../pages/desafios/desafios";
import { RegisterPage } from "../../pages/register/register";
import { RegistroPage } from "../../pages/registro/registro";


import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public Email: string;
  public Senha: string;

  constructor(public navCtrl: NavController) {

  }

login(){
    let _camposVazios = "";
    let _email = this.Email;
    let _password = this.Senha;


    if(_email == "" || _email == undefined){
      _camposVazios += "Preencha o campo Email\n";
    }
     if(_password == "" || _password == undefined){
      _camposVazios += "Preencha o campo Senha";
    }

    if(_camposVazios == ""){

      firebase.auth().signInWithEmailAndPassword(_email, _password).then(data => {
        this.navCtrl.push(DesafiosPage);
      }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
    
            if(errorMessage == "auth/invalid-email"){
              alert("Email ou senha Incorretos");
            }else if(errorMessage == "auth/wrong-password"){
              alert("Email ou senha Incorretos");
            }else if(errorMessage == "auth/user-not-found"){
              alert("Usuário não Cadastrado");
            }else if(errorMessage == "The email address is badly formatted."){
              alert("Insira um Email válido");
            }else{
              alert("Usuário ou senha inválidos");
            }
      });
    } else {
      alert(_camposVazios);
    }
  }
  

  register(){
    this.navCtrl.push(DesafiosPage);
  }

  openSelectGameMode(){
    this.navCtrl.push(DesafiosPage);
  }
  pageRegistro(){
    this.navCtrl.push(RegistroPage);
  }
}
