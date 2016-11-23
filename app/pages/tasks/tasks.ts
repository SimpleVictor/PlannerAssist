import { Component } from '@angular/core';
import {NavController, ModalController, AlertController} from 'ionic-angular';
import {SimpleTask} from "../../providers/SimpleTask";
import {TasksAddPage} from "./TaskAdd/taskadd";

declare var TweenLite;
declare var Circ;

@Component({
  templateUrl: 'build/pages/tasks/tasks.html',
})
export class TasksPage {

  FoodList;
  testRun;

  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public simpleTasks: SimpleTask, public alertCtrl: AlertController) {

    this.testRun = this.simpleTasks;

  }

  ionViewLoaded(){

  }

  ionViewWillEnter(){
    this.simpleTasks.GetAllTask((result) => {
      if(result){
        let AllFood = this.simpleTasks.AllTask;
        this.FoodList = AllFood;
      }else{
        console.log("failed grabbing stuff");
      }
    })
  }

  ionViewDidEnter(){
    let obj = document.getElementById("task-title");
    TweenLite.from(obj, 0.4, {width:"0px",opacity: 0, ease:Circ.easeOut});
  }


  GoToAddPage(){
    let modal = this.modalCtrl.create(TasksAddPage, { service: this.simpleTasks});

    modal.onDidDismiss(data => {
      if(data){
        this.refreshData();
      }
    });

    modal.present();
  }

  refreshData(){
    this.FoodList = this.simpleTasks.AllTask;
    let alert = this.alertCtrl.create({
      title: `All Set`,
      subTitle: 'Success! You have created a new task!',
      buttons: ['OK']
    });
    alert.present();
  }

  DeleteTask(id){
    console.log(id);
    this.simpleTasks.DeleteOneTask(id).then(
      (data) => {
        console.log("sucess!");
        this.simpleTasks.GetAllTask((result) => {
          if(result){
            let AllFood = this.simpleTasks.AllTask;
            this.FoodList = AllFood;
            let alert = this.alertCtrl.create({
              title: `Deleted`,
              subTitle: 'Bye bye task',
              buttons: ['OK']
            });
            alert.present();
          }else{
            console.log("failed grabbing stuff");
          }
        })
      }, (err) => {
        console.log("Failed to delete");
      }
    )

  }

  EditTask(id){
    console.log(id);
  }

}















