import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SavedPage} from "../saved/saved";
import {TestDB} from "../../providers/TestDB";

declare var TweenLite;
declare var Circ;

@Component({
  template: `


<ion-header>
  <ion-toolbar>
    <ion-title id="saved-title">Saved</ion-title>
    <ion-buttons>
      <button class="scan-button" ion-button icon-only (click)="GoBack()">Go Back</button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>


<ion-content>

<br/><br/>

<style>

.DB-button{

  margin-bottom: 20px;

}

</style>

<button class="DB-button" ion-button tappable color="secondary" full>Add Data</button>
<button class="DB-button" ion-button tappable color="light" full>Delete Single Data</button>
<button class="DB-button" ion-button tappable color="dark" full>Update Data</button>
<button class="DB-button" ion-button tappable color="danger" full (click)="DeleteAllTable()">Delete Table</button>


</ion-content>




`,
})
export class SecretDatabase {
  constructor(public navCtrl: NavController, public testDB:TestDB ) {

  }

  ionViewDidEnter(){


  }

  GoBack(){
    this.navCtrl.push(SavedPage);
  }

  //DELETE ALL THE TABLES
  DeleteAllTable(){
    this.testDB.TestDeleteAllTable((result) => {
      if(result) {
        console.log("Successfully deleted the table");
      }else{
        console.log("Failed deleting the table");
      }
    });
  }


}



























