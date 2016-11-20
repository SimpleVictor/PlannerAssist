import { Injectable } from '@angular/core';
import {SqlStorage, Storage} from 'ionic-angular';

@Injectable()
export class SimpleHome {

  storage: Storage = null;

  constructor() {
    this.storage = new Storage(SqlStorage);
    this.storage.query('CREATE TABLE IF NOT EXISTS my_home (id INTEGER PRIMARY KEY AUTOINCREMENT, home_current TEXT)')
      .then(
        result => {
          console.log(result);
          console.log("success making home table");
        }, err => {
          console.log("failed making home table");
          console.log(err);
        }
      );
  }

}
