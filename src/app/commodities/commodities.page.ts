import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ReceiptPage } from '../receipt/receipt.page';
import { DbService } from '../service/db.service';

@Component({
  selector: 'app-commodities',
  templateUrl: './commodities.page.html',
  styleUrls: ['./commodities.page.scss'],
})
export class CommoditiesPage implements OnInit {
total = 0
mydata
commodities = [[{
  id:1,name:'Ayam Bakar Lezaa',price: 65000,img:'../../assets/catalog/ayam-bakar-lezaa.png',amount:0
},
{
  id:2,name:'Ayam Goreng Merdeka',price: 75000,img:'../../assets/catalog/ayam-goreng-merdeka.png',amount:0
}],
[{
  id:3,name:'Ayam Krispy Merdeka',price: 75000,img:'../../assets/catalog/ayam-krispy-merdeka.png',amount:0
},
{
  id:4,name:'Ayam Merdeka',price: 75000,img:'../../assets/catalog/ayam-merdeka.png',amount:0
}],
[{
  id:5,name:'Ayam Panggang',price: 65000,img:'../../assets/catalog/ayam-panggang.png',amount:0
},
{
  id:6,name:'Iga Bakar Merdeka',price: 75000,img:'../../assets/catalog/iga-bakar-merdeka.png',amount:0
}],
[{
  id:7,name:'Puding Merdeka',price: 35000,img:'../../assets/catalog/puding-merdeka.png',amount:0
},
{
  id:8,name:'Salad Merdeka',price: 75000,img:'../../assets/catalog/salad-merdeka.png',amount:0
}]
]
cart = []
  constructor(
    private route:Router,
    private modal: ModalController,
    private db: DbService
    ) {
    this.sumCart()
    this.db.dbState().subscribe(res=>{
      if(res){
        this.db.fetchCommodities().subscribe(item=>{
          this.mydata = item
        })
      }
    })
  }
simplyCart = []
  ngOnInit() {
  }
  checkExist(obj,objarray){
    if(objarray.includes(obj)){
      console.log("Pre Totallyy",this.total)
      let i = objarray.indexOf(obj)
      this.total = 1*this.total + 1*obj.price
      objarray[i].amount = objarray[i].amount+1
      objarray[i].price = objarray[i].price+obj.price
      console.log("Index of obj is ",i)
      console.log("that obj exists",obj)
      console.log("Totallyy",this.total)
      this.sumCart
    }else{
      obj.amount = 1
      this.total = 1*this.total+ 1*obj.price
      console.log("that object doesnt exists",this.total)
      this.sumCart()
      objarray.push(obj)
    }
  }
  addTotal(obj){
    console.log("Invoked",obj)
    this.total = 1*this.total + 1*obj.price
    this.cart.push(obj)
    this.sumCart()
  }
  async showReceipt(){
    const modal = await this.modal.create({
      component:ReceiptPage,
      componentProps:{objs:this.simplyCart,total:this.total}
    })
    return await modal.present()
  }
  reset(){
    this.total = 0
    this.cart = []
    this.simplyCart = []
  }
  cekAmount(obj){
    if(obj>0){
      return "danger"
    }else{
      return "primary"
    }
  }
  addAmount(obj){
    console.log("invoked")
    this.addTotal(obj)
  }
  reduceAmount(obj){
    let x = this.cart.indexOf(obj)
    console.log("X",x)
    if(x>=0){
      this.total = this.total - obj.price
      this.cart.splice(x,1)
      this.sumCart()
    }
  }
  _reduceAmount(obj){
    if(this.cart.includes(obj)){
      let i = this.cart.indexOf(obj)
      this.total = this.total - obj.price
      this.cart[i].amount = this.cart[i].amount-1
      this.total = 1*this.total - 1*obj.price
      console.log("Remove Index of obj is ",i)
      console.log("that remove obj exists")
      this.sumCart()
    }else{
      this.sumCart()
      console.log("that remove object doesnt exists")
    }
  }
  sumCart(){
      var helper = {};
      var result = this.cart.reduce(function(r, o) {
        var key = o.name;
        if(!helper[key]) {
          helper[key] = Object.assign({}, o); // create a copy of o
          helper[key].amount = 1
          helper[key].subtotal = o.price
          r.push(helper[key]);
        } else {
          helper[key].amount += 1;
//          helper[key].price += o.price;
          helper[key].subtotal = helper[key].subtotal+ o.price
        }

      return r;
    }, []);
    this.simplyCart = result
    //console.log("Result",result);
  }
  getAmount(id){
    let x = this.simplyCart.find(x=>x.id===id)
    console.log("X",x)
    if(x){
      return x.amount
    }else{
      return 0
    }
  }
}
