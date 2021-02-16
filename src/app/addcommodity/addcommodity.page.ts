import { Component, OnInit } from '@angular/core';
import { DbService } from '../service/db.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addcommodity',
  templateUrl: './addcommodity.page.html',
  styleUrls: ['./addcommodity.page.scss'],
})
export class AddcommodityPage implements OnInit {
obj = {name:'',price:1,amount:1}
status = ""
  constructor(
    private db: DbService,
    private router: Router,
    private modalController:ModalController
    ) { }

  ngOnInit() {
  }
  saveCommodity(obj){
    this.db.addCommodity(obj)
    .then(()=>{
      this.db.fetchCommodities().subscribe(res=>{
        this.status = "Sukses"
        this.modalController.dismiss({
          success:true
        })
        //this.router.navigate(['/settings'])
      })
    })
    .catch(err=>{
      this.status = err
    })
  }
}
