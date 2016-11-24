import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SecretDatabase} from "../secretdb/secretdb";


declare var TweenLite;
declare var Circ;

@Component({
  templateUrl: 'build/pages/saved/saved.html',
})
export class SavedPage {
  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter(){

    let obj = document.getElementById("saved-title");
    TweenLite.from(obj, 0.4, {width:"0px",opacity: 0, ease:Circ.easeOut});


  }

  GoIntoSecretDB(){
    this.navCtrl.push(SecretDatabase);
  }

}
