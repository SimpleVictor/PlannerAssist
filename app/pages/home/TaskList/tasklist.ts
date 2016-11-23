import {Component, ViewChild, ElementRef} from '@angular/core';
import { NavController , ViewController, NavParams} from 'ionic-angular';

declare var TweenLite;
declare var Circ;

@Component({
  template: `

<ion-header>
  <ion-toolbar>
    <ion-title style="text-align:center;">Choose your Task</ion-title>
    <ion-buttons>
      <button class="scan-button" ion-button icon-only (click)="GoBack()">Cancel</button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>


<ion-content>

  <!--<h1 *ngIf="myTasks">Heyyyyyyyy</h1>-->

<style>
  .list-item{
    background-color: #333;
    color: #FFF;
  }
  .list-slider{
    background: transparent;
  }

  .single-icon{
    font-size: 5rem;
  }
</style>

<div *ngIf="myTasks">
  <ion-list class="list-row">
  <div *ngFor="let i of myTasks;let p = index">
      <ion-item #ionItem class="list-item" (click)="TaskChosen(ionItem, p)">
        <ion-icon class="single-icon" [ngStyle]="{'color': '#'+i.task_icon_color}" name="{{i.task_icon}}" item-left></ion-icon>
        <strong>{{i.task_name}}</strong>
        <h4 style="color: #ccc">{{i.task_description}}</h4>
      </ion-item>
</div>
  </ion-list>
</div>

</ion-content>


`,
})
export class TaskList {

  myTasks;

  constructor(public navCtrl: NavController, public vc: ViewController, public navParams: NavParams) {
    this.myTasks = this.navParams.get("AllTask");
  }

  ionViewDidEnter(){
    // console.log(this.simpleTask.AllTask);
  }

  TaskChosen(ionItem, index){
    let myItem = ionItem._elementRef.nativeElement;

    let GoBackPage = (vc, i) => {
      let data = {
        index: i
      };
      vc.dismiss(data);
    }

    TweenLite.to(myItem, 0.2, {left:'100%', ease:Circ.easeOut, onComplete: GoBackPage, onCompleteParams: [this.vc, index]});
  }

  GoBack(){
    this.vc.dismiss();
  }



}
