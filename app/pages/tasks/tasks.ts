import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SimpleTask} from "../../providers/SimpleTask";

declare var TweenLite;
declare var Circ;

@Component({
  templateUrl: 'build/pages/tasks/tasks.html',
})
export class TasksPage {
  constructor(public navCtrl: NavController, public simpleTasks: SimpleTask) {

  }

  ionViewDidEnter(){

    let obj = document.getElementById("task-title");
    TweenLite.from(obj, 0.4, {width:"0px",opacity: 0, ease:Circ.easeOut});
  }


}
