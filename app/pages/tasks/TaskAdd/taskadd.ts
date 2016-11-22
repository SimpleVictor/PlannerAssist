import { Component } from '@angular/core';
import {ViewController, ModalController, AlertController} from 'ionic-angular';
import {IconList} from "../IconList/icon-list";
import {SimpleTask} from "../../../providers/SimpleTask";

declare var TweenLite;
declare var Circ;

@Component({
  templateUrl: 'build/pages/tasks/TaskAdd/taskadd.html',
  providers: [SimpleTask]
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

  constructor(public viewCtrl: ViewController, public modalCtrl: ModalController, public alertCtrl: AlertController, public simpleTask: SimpleTask) {
    console.log("works");
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
      console.log("Sucess");

      this.simpleTask.AddOneTask(this.finalSub).then(
        (result) => {
          console.log("Success adding data");
          let alert = this.alertCtrl.create({
            title: `All Set`,
            subTitle: 'Success! You have created a new task!',
            buttons: [{
              text: "Ok",
              handler: data => {
                this.viewCtrl.dismiss();
              }
            }]
          });
          alert.present();
        }, (err) => {
          console.log("Failed adding data");
          let alert = this.alertCtrl.create({
            title: `Please try again`,
            subTitle: 'There seem to be a connection problem',
            buttons: ['OK']
          });
          alert.present();
        }
      );




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
