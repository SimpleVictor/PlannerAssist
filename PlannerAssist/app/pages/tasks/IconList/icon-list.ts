import { Component } from '@angular/core';
import {ViewController, ModalController} from "ionic-angular";
import {ChooseIconColor} from "../ChooseIconColor/choose-icon-color";

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
    <ion-col><ion-icon style="color: #E4004F" tappable ion-button (click)="chooseIcon('ionic')" class="icon-array-list" name="ionic" color="primary"></ion-icon></ion-col>
    <ion-col><ion-icon style="color: #019E97" tappable ion-button (click)="chooseIcon('logo-angular')" class="icon-array-list" name="logo-angular"></ion-icon></ion-col>
    <ion-col><ion-icon style="color: #F39801" tappable ion-button (click)="chooseIcon('heart')" class="icon-array-list" name="heart" color="danger"></ion-icon></ion-col>
    <ion-col><ion-icon style="color: #00A0E8" tappable ion-button (click)="chooseIcon('ionitron')" class="icon-array-list" name="ionitron" color="primary"></ion-icon></ion-col>

    <ion-col><ion-icon style="color: #019E97" tappable ion-button (click)="chooseIcon('happy')" class="icon-array-list" name="happy" color="vibrant"></ion-icon></ion-col>
    <ion-col><ion-icon style="color: #00A0E8" tappable ion-button (click)="chooseIcon('contact')" class="icon-array-list" name="contact"></ion-icon></ion-col>
    <ion-col><ion-icon style="color: #E4004F" tappable ion-button (click)="chooseIcon('people')" class="icon-array-list" name="people"></ion-icon></ion-col>
    <ion-col><ion-icon style="color: #F39801" tappable ion-button (click)="chooseIcon('person')" class="icon-array-list" name="person"></ion-icon></ion-col>

    <ion-col><ion-icon style="color: #E4004F" tappable ion-button (click)="chooseIcon('apps')" class="icon-array-list" name="apps"></ion-icon></ion-col>
    <ion-col><ion-icon style="color: #F39801" class="icon-array-list" name="lock" tappable ion-button (click)="chooseIcon('lock')"></ion-icon></ion-col>
    <ion-col><ion-icon style="color: #00A0E8" class="icon-array-list" name="unlock" tappable ion-button (click)="chooseIcon('unlock')"></ion-icon></ion-col>
    <ion-col><ion-icon style="color: #019E97" class="icon-array-list" name="key" color="bright" tappable ion-button (click)="chooseIcon('key')"></ion-icon></ion-col>

    <ion-col><ion-icon style="color: #00A0E8" class="icon-array-list" name="locate" tappable ion-button (click)="chooseIcon('locate')"></ion-icon></ion-col>
    <ion-col><ion-icon style="color: #F39801" class="icon-array-list" name="map" color="secondary" tappable ion-button (click)="chooseIcon('map')"></ion-icon></ion-col>
    <ion-col><ion-icon style="color: #019E97" class="icon-array-list" name="navigate" tappable ion-button (click)="chooseIcon('navigate')"></ion-icon></ion-col>
    <ion-col><ion-icon style="color: #E4004F" class="icon-array-list" name="pin" tappable ion-button (click)="chooseIcon('pin')"></ion-icon></ion-col>

    <ion-col><ion-icon style="color: #019E97" class="icon-array-list" name="mic" tappable ion-button (click)="chooseIcon('mic')"></ion-icon></ion-col>
    <ion-col><ion-icon style="color: #00A0E8" class="icon-array-list" name="musical-notes" color="vibrant" tappable ion-button (click)="chooseIcon('musical-notes')"></ion-icon></ion-col>
    <ion-col><ion-icon style="color: #F39801" class="icon-array-list" name="volume-up" tappable ion-button (click)="chooseIcon('volume-up')"></ion-icon></ion-col>
    <ion-col><ion-icon style="color: #E4004F" class="icon-array-list" name="microphone" tappable ion-button (click)="chooseIcon('microphone')"></ion-icon></ion-col>

    <ion-col><ion-icon style="color: #F39801" class="icon-array-list" name="cafe" color="bright" tappable ion-button (click)="chooseIcon('cafe')"></ion-icon></ion-col>
    <ion-col><ion-icon style="color: #00A0E8" class="icon-array-list" name="calculator" tappable ion-button (click)="chooseIcon('calculator')"></ion-icon></ion-col>
    <ion-col><ion-icon style="color: #E4004F" class="icon-array-list" name="bus" tappable ion-button (click)="chooseIcon('bus')"></ion-icon></ion-col>
    <ion-col><ion-icon style="color: #019E97" class="icon-array-list" name="wine" color="danger" tappable ion-button (click)="chooseIcon('wine')"></ion-icon></ion-col>

    <ion-col><ion-icon style="color: #00A0E8" class="icon-array-list" name="camera" tappable ion-button (click)="chooseIcon('camera')"></ion-icon></ion-col>
    <ion-col><ion-icon style="color: #F39801" class="icon-array-list" name="image" color="secondary" tappable ion-button (click)="chooseIcon('image')"></ion-icon></ion-col>
    <ion-col><ion-icon style="color: #E4004F" class="icon-array-list" name="star" color="bright" tappable ion-button (click)="chooseIcon('star')"></ion-icon></ion-col>
    <ion-col><ion-icon style="color: #019E97" class="icon-array-list" name="pin" tappable ion-button (click)="chooseIcon('pin')"></ion-icon></ion-col>

    <ion-col><ion-icon style="color: #019E97" class="icon-array-list" name="arrow-dropup-circle" color="vibrant" tappable ion-button (click)="chooseIcon('arrow-dropup-circle')"></ion-icon></ion-col>
    <ion-col><ion-icon style="color: #E4004F" class="icon-array-list" name="arrow-back" tappable ion-button (click)="chooseIcon('arrow-back')"></ion-icon></ion-col>
    <ion-col><ion-icon style="color: #00A0E8" class="icon-array-list" name="arrow-dropdown" tappable ion-button (click)="chooseIcon('arrow-dropdown')"></ion-icon></ion-col>
    <ion-col><ion-icon style="color: #F39801" class="icon-array-list" name="arrow-forward" tappable ion-button (click)="chooseIcon('arrow-forward')"></ion-icon></ion-col>

    <ion-col><ion-icon style="color: #E4004F" class="icon-array-list" name="cloud" tappable ion-button (click)="chooseIcon('cloud')"></ion-icon></ion-col>
    <ion-col><ion-icon style="color: #F39801" class="icon-array-list" name="sunny" color="bright" tappable ion-button (click)="chooseIcon('sunny')"></ion-icon></ion-col>
    <ion-col><ion-icon style="color: #019E97" class="icon-array-list" name="umbrella" tappable ion-button (click)="chooseIcon('umbrella')"></ion-icon></ion-col>
    <ion-col><ion-icon style="color: #00A0E8" class="icon-array-list" name="rainy" color="primary" tappable ion-button (click)="chooseIcon('rainy')"></ion-icon></ion-col>
  </ion-row>
</ion-content>



`
})
export class IconList{

    prettyColors: any[] = ['#E4004F','#F39801','#019E97','#00A0E8'];

    constructor(public vc: ViewController, public modalCtrl: ModalController) { }


  ionViewDidEnter(){

  }

  GoBack(){
    this.vc.dismiss(false);
  }

  chooseIcon(val){
    let profileModal = this.modalCtrl.create(ChooseIconColor, { icon: val});

    profileModal.onDidDismiss(data => {
      console.log(data);

      if(data){
        this.vc.dismiss(data);
      }else{
        console.log("Please choose an Icon");
      }

    });

    profileModal.present();

  }

}




















