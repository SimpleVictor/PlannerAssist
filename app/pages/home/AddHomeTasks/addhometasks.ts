import {Component, ViewChild} from '@angular/core';
import { NavController , ViewController, ModalController} from 'ionic-angular';
import {TaskList} from "../TaskList/tasklist";

@Component({
  templateUrl: 'build/pages/home/AddHomeTasks/addhometasks.html',
})
export class AddHomeTask {

  @ViewChild('dateTime1') sTime1;
  @ViewChild('dateTime2') sTime2;
  @ViewChild('onInput') onInp;

  finalTaskList;


  constructor(public navCtrl: NavController, public vc: ViewController, public modalCtrl: ModalController) {

  }

  ionViewDidEnter(){
    // console.log(this.onInp);
  }

  dateChanged(data){
    console.log(data);
  }


  openDate(){

    this.sTime1.open();
  }


  GoBack(){
    this.vc.dismiss();
  }

  openTaskList(){
    console.log("bang");
    let modal = this.modalCtrl.create(TaskList);
    modal.present();
  }

  openStartTime(){
    console.log("start");
  }

  openEndTime(){

    console.log("end");
  }




}
