import { Component } from '@angular/core';
import {ViewController, ModalController} from 'ionic-angular';
import {IconList} from "../IconList/icon-list";

declare var TweenLite;
declare var Circ;

@Component({
  templateUrl: 'build/pages/tasks/TaskAdd/taskadd.html',
})
export class TasksAddPage {
  constructor(public viewCtrl: ViewController, public modalCtrl: ModalController) {
    console.log("works");
  }


  ionViewDidEnter(){
  }

  OpenIcons(){
    let modal = this.modalCtrl.create(IconList);
    modal.present();
  }

  GoBack(){
    this.viewCtrl.dismiss();
  }


}