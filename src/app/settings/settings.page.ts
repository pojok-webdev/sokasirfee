import { Component, OnInit } from '@angular/core';
import { DbService } from '../service/db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  data
  message = "data belum di atur"
  constructor(
    private db: DbService,
    private route:Router
  ) {
    this.db.getRealdata()
    this.fetchData()
  }
  initData(){
    this.db.getFakeData()
  }
  getRealData(){
    this.db.getRealdata()
  }
  fetchData(){
    this.db.getCommodities();
    this.db.dbState().subscribe(res=>{
      if(res){
        this.db.fetchCommodities().subscribe(com=>{
          this.data = com
        })
        this.message = "Data ada"
      }else{
        this.message = "Data tidak akda"
      }
    })
  }
  ngOnInit() {
  }
  gotoSingle(dt){
    this.route.navigate(['/single/'+dt.id])
  }
  gotopage(){
    this.route.navigate(['/commodities'])
  }
  addCommodity(){
    this.route.navigate(['/addcommodity'])
  }
}
