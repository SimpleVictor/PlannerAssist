import { Component , NgZone} from '@angular/core';
import {NavController, ModalController, AlertController} from 'ionic-angular';
import {SimpleTask} from "../../providers/SimpleTask";
import {SimpleHome} from "../../providers/SimpleHome";
import {SimpleSaved} from "../../providers/SimpleSaved";
import {AddHomeTask} from "./AddHomeTasks/addhometasks";

declare var TweenLite;
declare var Circ;
declare var $;

@Component({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {

  zone;

  MessageAtAll:boolean = true;

  SavedTasks;
  HomeTasks;
  am12:any[] = [];
  am1:any[] = [];
  am2:any[] = [];
  am3:any[] = [];
  am4:any[] = [];
  am5:any[] = [];
  am6:any[] = [];
  am7:any[] = [];
  am8:any[] = [];
  am9:any[] = [];
  am10:any[] = [];
  am11:any[] = [];

  pm12:any[] = [];
  pm1:any[] = [];
  pm2:any[] = [];
  pm3:any[] = [];
  pm4:any[] = [];
  pm5:any[] = [];
  pm6:any[] = [];
  pm7:any[] = [];
  pm8:any[] = [];
  pm9:any[] = [];
  pm10:any[] = [];
  pm11:any[] = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public simpleHome: SimpleHome, public simpleSaved: SimpleSaved, public alertCtrl: AlertController, public simpleTasks: SimpleTask) {

    this.zone = new NgZone({enableLongStackTrace: false});

  }

  //Before the page loads
  ionViewWillEnter(){
    this.simpleTasks.GetAllTask((result) => {
      if(result){
        this.SavedTasks = this.simpleTasks.AllTask;
        this.HomeTasks = [];
        this.GrabAllData();
        console.log(this.SavedTasks);
      }else{
        console.log("Failed to hrab data");
      }
    })
  }

  //After the page loads
  ionViewDidEnter(){
    console.log("Hereeee");
    console.log($);
    let obj = document.getElementById("home-title");
    TweenLite.from(obj, 0.4, {width:"0px",opacity: 0, ease:Circ.easeOut});
    // this.GrabAllData();
  }

  dateChanged(data){
    console.log(data);
    console.log("hey");
  }


  GrabAllData(){
    this.simpleHome.GrabAllHomeTask((result) => {
      if(result){
        this.HomeTasks = this.simpleHome.AllHome;
        console.log(this.HomeTasks);
        // console.log(Number.parseInt(this.HomeTasks[1].task_id));
        this.zone.run(() => {
          // for (let i = 0; i < this.HomeTasks.length; i++) {
          //   this.am12.push(this.HomeTasks[i]);
          // }
          if (this.HomeTasks.length >= 1) {
            this.MessageAtAll = false;
          }
        });
      }
    })
  }

  GoToAddLocation(){
    let modal = this.modalCtrl.create(AddHomeTask, {AllTask: this.SavedTasks});

    modal.onDidDismiss(data => {
      if(data){
        this.simpleHome.AddHomeTask(data).then(
          (data) => {
              let now = this.simpleHome.AllHome;
            let alert = this.alertCtrl.create({
              title: `Success!`,
              subTitle: 'Enjoy',
              buttons: [        {
                text: 'Ok',
                handler: () => {
                  this.zone.run(() => {
                    this.GrabAllData();
                  });
                }
              },]
            });
            alert.present();
          }, (err) => {
            console.log(err);
            let alert = this.alertCtrl.create({
              title: `ERROR`,
              subTitle: 'Error with the DB',
              buttons: ["OK"]
            });
            alert.present();
          }
        );
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
            this.simpleHome.DeleteAllData((result) => {
              if(result){
                this.zone.run(() => {
                  this.MessageAtAll = true;
                })
                console.log("All done");
              };
            });
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }

  TestAppend(){
    // console.log($("#12am"));
      // $("#12am").append(`<div class='ion-list' no-lines>
      //   <div ion-item style="background-color: #333">
      //     <div ion-icon class='single-icon' name='leaf' item-left></div>
      //     <strong style="color:#FFF">Laundry</strong>
      //     <h4 style="color: #ccc">blah blah blah</h4>
      //     <h2 item-right style="margin-right: 5px;color:#fff">1:30pm - 2:30pm</h2>
      //   </div ion-item>
      // </div>`);

    // $("#12am").append(`<ion-icon class="single-icon" [ngStyle]="{'color': 'blue'}" name="leaf" item-left></ion-icon>`)

    console.log(this.am12);

  }


  SaveButton(){
    let alert = this.alertCtrl.create({
      title: `Sorry`,
      subTitle: 'The save button is not yet functional. Please wait for the next update',
      buttons: ["Wow"]
    });
    alert.present();
  }


}
