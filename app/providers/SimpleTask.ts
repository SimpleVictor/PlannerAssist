import { Injectable } from '@angular/core';
import {SqlStorage, Storage} from 'ionic-angular';


@Injectable()
export class SimpleTask {

  storage: Storage = null;

    AllTask: any[] = [];

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


    GetAllTask(callback){
      this.AllTask = [];
      this.storage.query('SELECT * FROM my_task').then(
        (data) => {
          for(let i = 0; i < data.res.rows.length; i++){
            this.AllTask.push(data.res.rows.item(i));
          };
          callback(true);
        }, (err) => {
          console.log("Failed grabbing data");
          callback(false);
        }
      );
    }

    AddOneTask(data){
      console.log(data);
      return this.storage.query(`INSERT INTO my_task (task_name, task_icon , task_description , task_icon) VALUES (?,?,?,?)`, [data.task_name, data.icon ,data.task_desc, data.icon_color]);
    }





}
