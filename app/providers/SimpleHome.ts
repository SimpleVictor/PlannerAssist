import { Injectable } from '@angular/core';
import {SqlStorage, Storage} from 'ionic-angular';

@Injectable()
export class SimpleHome {

  storage: Storage = null;

  constructor() {
    this.storage = new Storage(SqlStorage);
    this.storage.query('CREATE TABLE IF NOT EXISTS my_home (id INTEGER PRIMARY KEY AUTOINCREMENT, what_task_id TEXT, home_task_time_text TEXT, start_time_hour TEXT, start_time_minute TEXT ,end_time_hour TEXT, end_time_minute TEXT, ampm TEXT)')
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

  //what_task_id
  //home_task_time_text
  //start_time_hour
  //start_time_minute
  //end_time_hour
  //end_time_minute
  //ampm

  AddHomeTask(result){

    let obj = {
      task_id: result.task_id,
      timeTextStart: result.timeTextStart,
      timeTextEnd: result.timeTextEnd,
      startHour: result.startHour,
      startMinute: result.StartMinute,
      startAMPM: result.startAMPM,
      endHour: result.endHour,
      endMinute: result.endMinute,
      endAMPM: result.endAMPM
    };

    console.log(obj);
    // console.log(taskData);
  }

}
