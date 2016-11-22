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

  FoodList;

  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public simpleTask: SimpleTask) {

  }

  ionViewLoaded(){
    this.simpleTask.GetAllTask((result) => {
      if(result){
        let AllFood = this.simpleTask.AllTask;
        this.FoodList = AllFood;
        console.log(this.FoodList);
      }else{
        console.log("failed grabbing stuff");
      }
    })
  }

  ionViewDidEnter(){
    let obj = document.getElementById("task-title");
    TweenLite.from(obj, 0.4, {width:"0px",opacity: 0, ease:Circ.easeOut});
    console.log("went back in here");
  }


  GoToAddPage(){
    let modal = this.modalCtrl.create(TasksAddPage);

    modal.onDidDismiss(data => {
      this.refreshData();
    });

    modal.present();
  }

  refreshData(){

    console.log("Went back in here");
    this.simpleTask.GetAllTask((result) => {
      if(result){
        console.log(this.simpleTask.AllTask);
      }else{
        console.log("failed grabbing stuff");
      }
    })

  }

}
