import { Component, OnInit } from '@angular/core';
import { DbService } from '../service/db.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { getElement } from '@ionic/core/dist/types/stencil-public-runtime';

@Component({
  selector: 'app-addcommodity',
  templateUrl: './addcommodity.page.html',
  styleUrls: ['./addcommodity.page.scss'],
})
export class AddcommodityPage implements OnInit {
obj = {name:'',price:1,amount:1,img:''}
myimg
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
    resizeImage(url, callback){
    var canvas = document.createElement("canvas");
    var MAX_WIDTH_ALLOWED = 500;
    var MAX_HEIGHT = 0;
    canvas.width = 500;
    var img = new Image();
    img.onload = function(){
      MAX_HEIGHT = img.height * MAX_WIDTH_ALLOWED / img.width;
      canvas.height = MAX_HEIGHT;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, MAX_WIDTH_ALLOWED, MAX_HEIGHT);
      callback(canvas.toDataURL("image/jpeg"));
    }
    img.src = url;
  }
  
  uploadImage(event){
    let that = this
    var input = event.target;
		var filereader = new FileReader();
		filereader.onload = function(){
			that.resizeImage(filereader.result, function(result){
       that.myimg = result
			})
		}
		filereader.readAsDataURL(input.files[0]);

  }
}
