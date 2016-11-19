import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TabsComponent} from "../tabs/tabs.component";

@Component({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }
}
