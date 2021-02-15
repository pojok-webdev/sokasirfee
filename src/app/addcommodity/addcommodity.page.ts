import { Component, OnInit } from '@angular/core';
import { DbService } from '../service/db.service';

@Component({
  selector: 'app-addcommodity',
  templateUrl: './addcommodity.page.html',
  styleUrls: ['./addcommodity.page.scss'],
})
export class AddcommodityPage implements OnInit {
obj = {name:'',price:1,amount:1}
status = ""
  constructor(private db: DbService) { }

  ngOnInit() {
  }
  saveCommodity(obj){
    this.db.addCommodity(obj)
    .then(()=>{
      this.status = "Sukses"
    })
    .catch(err=>{
      this.status = err
    })
  }
}
