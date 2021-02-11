import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.page.html',
  styleUrls: ['./receipt.page.scss'],
})
export class ReceiptPage implements OnInit {
@Input() objs:any
@Input() total:number
  constructor(private modal:ModalController) { }

  ngOnInit() {
  }
  home(){
    this.modal.dismiss()
  }
  whatsapp(){
//    this.social.shareViaWhatsApp("test1",null,null)
  }
  numberWithCommas(n) {
    var parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
}
}
