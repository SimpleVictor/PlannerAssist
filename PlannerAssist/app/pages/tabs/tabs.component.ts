import { Component, OnInit } from '@angular/core';
import {HomePage} from "../home/home";
import {SavedPage} from "../saved/saved";
import {TasksPage} from "../tasks/tasks";

@Component({
    templateUrl: 'build/pages/tabs/tabs.component.html'
})
export class TabsComponent implements OnInit {
  private tab1:any;
  private tab2: any;
  private tab3:any;


  constructor() {

    this.tab1 = HomePage;
    this.tab2 = TasksPage;
    this.tab3 = SavedPage;

    }


    ngOnInit() { }




}
