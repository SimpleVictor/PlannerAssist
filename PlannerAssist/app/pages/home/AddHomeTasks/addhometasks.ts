import {Component, ViewChild, NgZone} from '@angular/core';
import {NavController, ViewController, ModalController, NavParams, AlertController} from 'ionic-angular';
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
  @ViewChild('dateInput1') dateInput1;
  @ViewChild('dateInput2') dateInput2;

  finalTaskList;

  myTasks;

  myCurrentTask;

  takeOutFirstInput: boolean = true;

  zone;

  militaryStart;
  militaryEnd;

  timeText1;
  timeText2;

  useThisIndex;


  constructor(public navCtrl: NavController, public vc: ViewController, public modalCtrl: ModalController, public navParams: NavParams, public alertCtrl: AlertController) {

    this.myTasks = this.navParams.get("AllTask");
    this.zone = new NgZone({enableLongStackTrace: false});

  }

  ionViewDidEnter(){
    // console.log(this.onInp);

    // let check = document.getElementById("checkThisGuy");
    // console.log(check);


  }

  dateChanged1(data){
    console.log(data);
    this.militaryStart = data.getValue();
    this.timeText1 = data._text;
    this.dateInput1.value = data._text;


  }

  dateChanged2(data){
    console.log(data);
    this.militaryEnd = data.getValue();
    this.timeText2 = data._text;
    this.dateInput2.value = data._text;
  }


  openDate(){

    this.sTime1.open();
  }


  GoBack(){
    this.vc.dismiss(false);
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
          this.useThisIndex = data.index;
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
    this.sTime1.open();
  }



  openEndTime(){
    this.sTime2.open();
    console.log("end");
  }

  AddHomeTask(){
    if(this.useThisIndex && this.militaryStart && this.militaryEnd){
      let obj = {
        // task_id: this.myCurrentTask.id,
        task_id: Number.parseInt(this.useThisIndex),
        timeTextStart: this.timeText1,
        timeTextEnd: this.timeText2,
        startHour: this.militaryStart.hour,
        startMinute: this.militaryStart.minute,
        startAMPM: this.militaryStart.ampm,
        endHour: this.militaryEnd.hour,
        endMinute: this.militaryEnd.minute,
        endAMPM: this.militaryEnd.ampm
      };
      this.vc.dismiss(obj);
    }else{
      let alert = this.alertCtrl.create({
        title: `Whoa there`,
        subTitle: 'Please fill out all requirements',
        buttons: ["okay"]
      });
      alert.present();
    }

    console.log(this.useThisIndex);



  }




}
