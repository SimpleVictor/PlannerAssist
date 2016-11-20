import { Component } from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {SimpleTask} from "../../providers/SimpleTask";
import {TasksAddPage} from "./TaskAdd/taskadd";

declare var TweenLite;
declare var Circ;

@Component({
  templateUrl: 'build/pages/tasks/tasks.html',
})
export class TasksPage {
  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public simpleTasks: SimpleTask) {

  }

  ionViewDidEnter(){
    let obj = document.getElementById("task-title");
    TweenLite.from(obj, 0.4, {width:"0px",opacity: 0, ease:Circ.easeOut});
  }


  GoToAddPage(){
    let modal = this.modalCtrl.create(TasksAddPage);
    modal.present();
  }

}
