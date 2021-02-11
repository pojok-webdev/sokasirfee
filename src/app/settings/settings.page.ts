import { Component, OnInit } from '@angular/core';
import { DbService } from '../service/db.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  data
  constructor(
    private db: DbService
  ) { }
  initData(){
    this.db.doInit()
  }
  fetchData(){
    this.db.dbState().subscribe(res=>{
      if(res){
        this.db.fetchCommodities().subscribe(com=>{
          this.data = com
        })
      }
    })
  }
  ngOnInit() {
  }

}
