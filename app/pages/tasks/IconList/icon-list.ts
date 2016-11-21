import { Component } from '@angular/core';
import {ViewController} from "ionic-angular/index";

@Component({
    template: `

<ion-header>
  <ion-toolbar>
    <ion-title id="add-task-title">Icon List</ion-title>
    <ion-buttons>
      <button class="scan-button" ion-button icon-only (click)="GoBack()">Close</button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>csscsc

<ion-content class="icon-list">
<ion-row>
    <ion-col><ion-icon class="icon-array-list" name="ionic" color="primary"></ion-icon></ion-col>
    <ion-col><ion-icon class="icon-array-list" name="logo-angular"></ion-icon></ion-col>
    <ion-col><ion-icon class="icon-array-list" name="heart" color="danger"></ion-icon></ion-col>
    <ion-col><ion-icon class="icon-array-list" name="ionitron" color="primary"></ion-icon></ion-col>

    <ion-col><ion-icon class="icon-array-list" name="happy" color="vibrant"></ion-icon></ion-col>
    <ion-col><ion-icon class="icon-array-list" name="people"></ion-icon></ion-col>
    <ion-col><ion-icon class="icon-array-list" name="person"></ion-icon></ion-col>
    <ion-col><ion-icon class="icon-array-list" name="contact"></ion-icon></ion-col>

    <ion-col><ion-icon class="icon-array-list" name="apps"></ion-icon></ion-col>
    <ion-col><ion-icon class="icon-array-list" name="lock"></ion-icon></ion-col>
    <ion-col><ion-icon class="icon-array-list" name="key" color="bright"></ion-icon></ion-col>
    <ion-col><ion-icon class="icon-array-list" name="unlock"></ion-icon></ion-col>

    <ion-col><ion-icon class="icon-array-list" name="map" color="secondary"></ion-icon></ion-col>
    <ion-col><ion-icon class="icon-array-list" name="navigate"></ion-icon></ion-col>
    <ion-col><ion-icon class="icon-array-list" name="pin"></ion-icon></ion-col>
    <ion-col><ion-icon class="icon-array-list" name="locate"></ion-icon></ion-col>

    <ion-col><ion-icon class="icon-array-list" name="mic"></ion-icon></ion-col>
    <ion-col><ion-icon class="icon-array-list" name="musical-notes" color="vibrant"></ion-icon></ion-col>
    <ion-col><ion-icon class="icon-array-list" name="volume-up"></ion-icon></ion-col>
    <ion-col><ion-icon class="icon-array-list" name="microphone"></ion-icon></ion-col>

    <ion-col><ion-icon class="icon-array-list" name="cafe" color="bright"></ion-icon></ion-col>
    <ion-col><ion-icon class="icon-array-list" name="calculator"></ion-icon></ion-col>
    <ion-col><ion-icon class="icon-array-list" name="bus"></ion-icon></ion-col>
    <ion-col><ion-icon class="icon-array-list" name="wine" color="danger"></ion-icon></ion-col>

    <ion-col><ion-icon class="icon-array-list" name="camera"></ion-icon></ion-col>
    <ion-col><ion-icon class="icon-array-list" name="image" color="secondary"></ion-icon></ion-col>
    <ion-col><ion-icon class="icon-array-list" name="star" color="bright"></ion-icon></ion-col>
    <ion-col><ion-icon class="icon-array-list" name="pin"></ion-icon></ion-col>

    <ion-col><ion-icon class="icon-array-list" name="arrow-dropup-circle" color="vibrant"></ion-icon></ion-col>
    <ion-col><ion-icon class="icon-array-list" name="arrow-back"></ion-icon></ion-col>
    <ion-col><ion-icon class="icon-array-list" name="arrow-dropdown"></ion-icon></ion-col>
    <ion-col><ion-icon class="icon-array-list" name="arrow-forward"></ion-icon></ion-col>

    <ion-col><ion-icon class="icon-array-list" name="cloud"></ion-icon></ion-col>
    <ion-col><ion-icon class="icon-array-list" name="sunny" color="bright"></ion-icon></ion-col>
    <ion-col><ion-icon class="icon-array-list" name="umbrella"></ion-icon></ion-col>
    <ion-col><ion-icon class="icon-array-list" name="rainy" color="primary"></ion-icon></ion-col>
  </ion-row>
</ion-content>



`
})
export class IconList{

    prettyColors: any[] = ['#E4004F','#F39801','#019E97','#00A0E8'];

    constructor(public vc: ViewController) { }


  ionViewDidEnter(){
    var x = document.getElementsByClassName("icon-array-list");
    console.log(x);

    // console.log(x[0].style.color )

    console.log(x[0].style);
    // for(let i = 0; i < x.length; i++){
    //   x[i].style.color = `this.prettyColors[2]`;
    // }



  }

  GoBack(){
    this.vc.dismiss();
  }

}




















