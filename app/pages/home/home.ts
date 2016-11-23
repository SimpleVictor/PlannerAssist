import { Component } from '@angular/core';
import {NavController, ModalController, AlertController} from 'ionic-angular';
import {SimpleTask} from "../../providers/SimpleTask";
import {SimpleHome} from "../../providers/SimpleHome";
import {SimpleSaved} from "../../providers/SimpleSaved";
import {AddHomeTask} from "./AddHomeTasks/addhometasks";

declare var TweenLite;
declare var Circ;

@Component({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {

  MessageAtAll:boolean = true;

  SavedTasks;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public simpleHome: SimpleHome, public simpleSaved: SimpleSaved, public alertCtrl: AlertController, public simpleTasks: SimpleTask) {

  }

  //Before the page loads
  ionViewWillEnter(){
    this.simpleTasks.GetAllTask((result) => {
      if(result){
        this.SavedTasks = this.simpleTasks.AllTask;
        console.log(this.SavedTasks);
      }else{
        console.log("Failed to hrab data");
      }
    })
  }

  //After the page loads
  ionViewDidEnter(){
    let obj = document.getElementById("home-title");
    TweenLite.from(obj, 0.4, {width:"0px",opacity: 0, ease:Circ.easeOut});
  }

  dateChanged(data){
    console.log(data);
    console.log("hey");
  }

  GoToAddLocation(){
    let modal = this.modalCtrl.create(AddHomeTask, {AllTask: this.SavedTasks});

    modal.onDidDismiss(data => {
      if(data){
        // this.refreshData();
      }
    });

    modal.present();
  }

  ClearPage(){
    let alert = this.alertCtrl.create({
      title: `Clear the Page`,
      subTitle: 'Are you sure you want to do that?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }



}
