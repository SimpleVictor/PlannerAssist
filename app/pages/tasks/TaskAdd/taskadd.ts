import { Component } from '@angular/core';
import {ViewController, ModalController, AlertController, NavParams} from 'ionic-angular';
import {IconList} from "../IconList/icon-list";
import {TasksPage} from "../tasks";

declare var TweenLite;
declare var Circ;

@Component({
  templateUrl: 'build/pages/tasks/TaskAdd/taskadd.html'
})
export class TasksAddPage {

  finalSub= {
    task_name: "",
    task_desc: "",
    alert: "true",
    icon: "ionic",
    icon_color: "E4004F"
  };

  displayIcon;

  DBService;

  constructor(public viewCtrl: ViewController, public modalCtrl: ModalController, public alertCtrl: AlertController, public params: NavParams) {


    this.DBService= params.get('service');

  }


  ionViewDidEnter(){

    this.displayIcon = window.document.getElementById("displayIcon");
    this.displayIcon.style.color = "#FFF";

  }

  OpenIcons(){
    let modal = this.modalCtrl.create(IconList);

    modal.onDidDismiss(data => {
      if(data){
        console.log(data);
        this.finalSub.icon = data.icon;
        this.finalSub.icon_color = data.color;
        this.displayIcon.style.color = `#${data.color}`;
        console.log(this.finalSub);
      }
    });

    modal.present();
  }

  GoBack(){
    this.viewCtrl.dismiss();
  }

  submitTask(){
    if(this.finalSub.task_name){
      this.DBService.AddOneTask(this.finalSub, (result) => {
        if (result) {
          this.DBService.GetAllTask((result2) => {
            if (result2) {
              this.viewCtrl.dismiss();
            } else {
              console.log("Failed to grav data");
                let alert = this.alertCtrl.create({
                  title: `Please try again`,
                  subTitle: 'There seem to be a connection problem',
                  buttons: ['OK']
                });
                alert.present();
            }
          })
        }else{
          console.log("no");
        }
      });
    }else{
      let alert = this.alertCtrl.create({
        title: `You ain't done yet =(`,
        subTitle: 'Please atleast fill out the name of your task',
        buttons: ['OK']
      });
      alert.present();
    };
  }


}
