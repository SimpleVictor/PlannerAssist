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
</ion-header>

<ion-content class="icon-list">
<ion-row>
    <ion-col><ion-icon name="ionic" color="primary"></ion-icon></ion-col>
    <ion-col><ion-icon name="logo-angular"></ion-icon></ion-col>
    <ion-col><ion-icon name="heart" color="danger"></ion-icon></ion-col>
    <ion-col><ion-icon name="ionitron" color="primary"></ion-icon></ion-col>

    <ion-col><ion-icon name="happy" color="vibrant"></ion-icon></ion-col>
    <ion-col><ion-icon name="people"></ion-icon></ion-col>
    <ion-col><ion-icon name="person"></ion-icon></ion-col>
    <ion-col><ion-icon name="contact"></ion-icon></ion-col>

    <ion-col><ion-icon name="apps"></ion-icon></ion-col>
    <ion-col><ion-icon name="lock"></ion-icon></ion-col>
    <ion-col><ion-icon name="key" color="bright"></ion-icon></ion-col>
    <ion-col><ion-icon name="unlock"></ion-icon></ion-col>

    <ion-col><ion-icon name="map" color="secondary"></ion-icon></ion-col>
    <ion-col><ion-icon name="navigate"></ion-icon></ion-col>
    <ion-col><ion-icon name="pin"></ion-icon></ion-col>
    <ion-col><ion-icon name="locate"></ion-icon></ion-col>

    <ion-col><ion-icon name="mic"></ion-icon></ion-col>
    <ion-col><ion-icon name="musical-notes" color="vibrant"></ion-icon></ion-col>
    <ion-col><ion-icon name="volume-up"></ion-icon></ion-col>
    <ion-col><ion-icon name="microphone"></ion-icon></ion-col>

    <ion-col><ion-icon name="cafe" color="bright"></ion-icon></ion-col>
    <ion-col><ion-icon name="calculator"></ion-icon></ion-col>
    <ion-col><ion-icon name="bus"></ion-icon></ion-col>
    <ion-col><ion-icon name="wine" color="danger"></ion-icon></ion-col>

    <ion-col><ion-icon name="camera"></ion-icon></ion-col>
    <ion-col><ion-icon name="image" color="secondary"></ion-icon></ion-col>
    <ion-col><ion-icon name="star" color="bright"></ion-icon></ion-col>
    <ion-col><ion-icon name="pin"></ion-icon></ion-col>

    <ion-col><ion-icon name="arrow-dropup-circle" color="vibrant"></ion-icon></ion-col>
    <ion-col><ion-icon name="arrow-back"></ion-icon></ion-col>
    <ion-col><ion-icon name="arrow-dropdown"></ion-icon></ion-col>
    <ion-col><ion-icon name="arrow-forward"></ion-icon></ion-col>

    <ion-col><ion-icon name="cloud"></ion-icon></ion-col>
    <ion-col><ion-icon name="sunny" color="bright"></ion-icon></ion-col>
    <ion-col><ion-icon name="umbrella"></ion-icon></ion-col>
    <ion-col><ion-icon name="rainy" color="primary"></ion-icon></ion-col>
  </ion-row>
</ion-content>



`
})
export class IconList{
    constructor(public vc: ViewController) { }


  GoBack(){
    this.vc.dismiss();
  }

}