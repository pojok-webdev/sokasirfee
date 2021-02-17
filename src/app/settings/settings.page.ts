import { Component, OnInit } from '@angular/core';
import { DbService } from '../service/db.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddcommodityPage } from '../addcommodity/addcommodity.page';

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
    private route:Router,
    private modalController: ModalController
  ) {
  }
  initData(){
    this.db.getFakeData()
  }
  getRealData(){
    this.db.getRealdata()
    this.fetchData()
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
  removeCommodity(obj){
    this.db.deleteCommodity(obj.id)
    .then(()=>{
      this.fetchData()
    })
    .catch(err=>{
      console.log("Err",err)
    })
  }
  ngOnInit() {
    this.db.getRealdata()
    this.fetchData()
  }
  gotoSingle(dt){
    this.route.navigate(['/single/'+dt.id])
  }
  gotopage(){
    this.route.navigate(['/commodities'])
  }
  async addCommodity(){
    let modal = await this.modalController.create({
      component: AddcommodityPage,
      componentProps:{}
    })
    modal.onDidDismiss().then(res=>{
      this.fetchData()
    })
    return await modal.present()
  }
}
