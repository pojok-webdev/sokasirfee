import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from '../service/db.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.page.html',
  styleUrls: ['./single.page.scss'],
})
export class SinglePage implements OnInit {
obj
  constructor(
    private ar:ActivatedRoute,
    private db:DbService,
    private routing: Router
    ) {
    let id = this.ar.snapshot.params['id']
    this.db.getCommodity(id).then(res=>{
      this.obj = res
    })
  }
  removeObj(){
    this.db.deleteCommodity(this.obj.id).then(res=>{
      this.routing.navigate(['/settings'])
    })
  }
  ngOnInit() {
  }

}
