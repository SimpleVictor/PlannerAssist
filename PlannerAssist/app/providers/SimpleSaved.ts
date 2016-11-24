import { Injectable } from '@angular/core';
import {SqlStorage, Storage} from 'ionic-angular';

@Injectable()
export class SimpleSaved {

  storage: Storage = null;

  constructor() {
    this.storage = new Storage(SqlStorage);
    this.storage.query('CREATE TABLE IF NOT EXISTS my_saved (id INTEGER PRIMARY KEY AUTOINCREMENT, saved_name TEXT , saved_description TEXT, saved_task TEXT)')
      .then(
        result => {
          console.log(result);
          console.log("success making saved table");
        }, err => {
          console.log("failed making saved table");
          console.log(err);
        }
      );
  }

}
