import {Component, ViewChild, NgZone} from '@angular/core';
import {NavController, ViewController, ModalController, NavParams} from 'ionic-angular';
import {TaskList} from "../TaskList/tasklist";

declare var TweenLite;
declare var Circ;

@Component({
  templateUrl: 'build/pages/home/AddHomeTasks/addhometasks.html',
})
export class AddHomeTask {

  @ViewChild('dateTime1') sTime1;
  @ViewChild('dateTime2') sTime2;
  @ViewChild('onInput') onInp;

  finalTaskList;

  myTasks;

  myCurrentTask;

  takeOutFirstInput: boolean = true;

  zone;


  constructor(public navCtrl: NavController, public vc: ViewController, public modalCtrl: ModalController, public navParams: NavParams) {

    this.myTasks = this.navParams.get("AllTask");
    this.zone = new NgZone({enableLongStackTrace: false});

  }

  ionViewDidEnter(){
    // console.log(this.onInp);

    // let check = document.getElementById("checkThisGuy");
    // console.log(check);

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
    let modal = this.modalCtrl.create(TaskList, {AllTask: this.myTasks});
    modal.onDidDismiss(data => {
      if(data){

        console.log(data);
        this.zone.run(() => {
          this.takeOutFirstInput = false;
          this.myCurrentTask = this.myTasks[data.index];
          console.log(this.myCurrentTask);

          setTimeout(() => {
            let spinMe = document.getElementById("spinHimIn");
            spinMe.style.opacity = "1";
            TweenLite.from(spinMe, 0.3, {left:"-100%", ease:Circ.easeOut});
          }, 100);



        });


      }
    });
    modal.present();
  }

  openStartTime(){
    console.log("start");
  }

  openEndTime(){

    console.log("end");
  }




}
