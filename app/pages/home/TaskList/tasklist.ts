import {Component, ViewChild} from '@angular/core';
import { NavController , ViewController} from 'ionic-angular';

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

<h1>Hey</h1>

</ion-content>


`,
})
export class TaskList {

  constructor(public navCtrl: NavController, public vc: ViewController) {

  }

  ionViewDidEnter(){

  }

  GoBack(){
    this.vc.dismiss();
  }



}
