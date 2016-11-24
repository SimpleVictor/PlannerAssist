import { Injectable } from '@angular/core';
import {SqlStorage, Storage} from 'ionic-angular';

@Injectable()
export class SimpleHome {


  storage: Storage = null;

  AllHome:any[] = [];

  constructor() {
    this.storage = new Storage(SqlStorage);
    this.storage.query('CREATE TABLE IF NOT EXISTS my_home (id INTEGER PRIMARY KEY AUTOINCREMENT, task_id TEXT, timeTextStart TEXT, timeTextEnd TEXT, startHour TEXT ,startMinute TEXT, startAMPM TEXT, endHour TEXT, endMinute TEXT, endAMPM TEXT)')
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

  GrabAllHomeTask(callback){
    this.AllHome = [];
    this.storage.query('SELECT * FROM my_home').then(
      (data) => {
        for(let i = 0; i < data.res.rows.length; i++){
          this.AllHome.push(data.res.rows.item(i));
        };
        callback(true);
      }, (err) => {
        console.log("Failed grabbing data");
        callback(false);
      }
    );
  }

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


    let sql = `INSERT INTO my_home (task_id, timeTextStart, timeTextEnd, startHour, startMinute, startAMPM, endHour, endMinute, endAMPM) VALUES (?,?,?,?,?,?,?,?,?)`;
    return this.storage.query(sql , [obj.task_id, obj.timeTextStart, obj.timeTextEnd, obj.startHour, obj.startMinute, obj.startAMPM, obj.endHour, obj.endMinute, obj.endAMPM]);


  }


  DeleteAllData(callback){

    this.storage.query(`DROP TABLE IF EXISTS my_home`).then(
      (data) => {
        console.log("Sucess deleting everything in draft!");
        this.storage.query('CREATE TABLE IF NOT EXISTS my_home (id INTEGER PRIMARY KEY AUTOINCREMENT, task_id TEXT, timeTextStart TEXT, timeTextEnd TEXT, startHour TEXT ,startMinute TEXT, startAMPM TEXT, endHour TEXT, endMinute TEXT, endAMPM TEXT)').then(
          result => {
            console.log("Created Table draft_table Successfully");
            callback(true);
          }, err => {
            console.log("Failed Making Table draft_table");
            console.log(err);
            callback(false);
          }
        );
      }, (err) => {
        console.log("ERROR DELETING food_table!");
        callback(false);
        console.log(err);
      }
    );

  }

}
