import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SimpleTask} from "../../providers/SimpleTask";
import {SimpleHome} from "../../providers/SimpleHome";
import {SimpleSaved} from "../../providers/SimpleSaved";

declare var TweenLite;
declare var Circ;

@Component({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  constructor(public navCtrl: NavController, public simpleTask: SimpleTask, public simpleHome: SimpleHome, public simpleSaved: SimpleSaved) {

  }

  ionViewDidEnter(){
    let obj = document.getElementById("home-title");
    TweenLite.from(obj, 0.4, {width:"0px",opacity: 0, ease:Circ.easeOut});
  }





}
