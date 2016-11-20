import { Injectable } from '@angular/core';
import {SqlStorage, Storage} from 'ionic-angular';


@Injectable()
export class SimpleTask {

  storage: Storage = null;

    constructor() {
      this.storage = new Storage(SqlStorage);
      this.storage.query('CREATE TABLE IF NOT EXISTS my_task (id INTEGER PRIMARY KEY AUTOINCREMENT, task_name TEXT , task_icon TEXT, task_description TEXT, task_icon_color TEXT)')
        .then(
          result => {
            console.log(result);
            console.log("success making task table");
          }, err => {
            console.log("failed making task table");
            console.log(err);
          }
        );
    }


}
