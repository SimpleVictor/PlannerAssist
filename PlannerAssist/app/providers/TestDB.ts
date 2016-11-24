import { Injectable } from '@angular/core';
import {SqlStorage, Storage} from 'ionic-angular';


@Injectable()
export class TestDB {

  storage: Storage = null;

  constructor() {
      this.storage = new Storage(SqlStorage);
  }

  TestDeleteAllTable(callback){
      this.storage.query("DROP TABLE IF EXISTS my_home").then(
        (data) => {
          this.storage.query("DROP TABLE IF EXISTS my_saved").then(
            (data) => {
              this.storage.query("DROP TABLE IF EXISTS my_task").then(
                (data) => {
                  callback(true);
                }, (err) => {
                  console.log(err);
                  callback(false);
                }
              )
            }, (err) => {
              console.log(err);
              callback(false);
            }
          )
        }, (err) => {
          console.log(err);
          callback(false);
        }
      );
  }


}
