import { Injectable } from '@angular/core';
import {SqlStorage, Storage} from 'ionic-angular';

@Injectable()
export class SimpleHome {

  storage: Storage = null;

  constructor() {
    this.storage = new Storage(SqlStorage);
    this.storage.query('CREATE TABLE IF NOT EXISTS my_home (id INTEGER PRIMARY KEY AUTOINCREMENT, home_task_order TEXT, home_task_hour_text TEXT, home_task_start_time TEXT, home_task_end_time TEXT)')
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

  //home_task_order
  //home_task_hour_text
  //home_task_start_time
  //home_task_end_time

  AddHomeTask(obj, taskData){
    console.log(obj);
    console.log(taskData);
  }

}
