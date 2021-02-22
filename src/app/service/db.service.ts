// db.service.ts

import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Commodities } from '../services/commodities';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class DbService {
  public storage: SQLiteObject;
  songsList = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,
  ) {
    //doInit
  }
  pujiGetData(){
    this.platform.ready().then(()=>{
      
    })
  }
  doInit(){
    this.platform.ready().then(() => {
      this.sqlite.create({
//        name: 'positronx_db.db',
        name:'toko.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.storage = db;
      });
    });
  }
  dbState() {
    return this.isDbReady.asObservable();
  }

  fetchCommodities(): Observable<Commodities[]> {
    return this.songsList.asObservable();
  }

    // Render fake data
    getFakeData() {
      this.httpClient.get(
        'assets/restorefactory.sql',
        {responseType: 'text'}
      ).subscribe(data => {
        this.sqlPorter.importSqlToDb(this.storage, data)
          .then(_ => {
            this.getCommodities();
            this.isDbReady.next(true);
          })
          .catch(error => console.error(error));
      });
    }
    getRealdata(){
      this.httpClient.get(
        'assets/getdata.sql',
        {responseType: 'text'}
      ).subscribe(data => {
        this.sqlPorter.importSqlToDb(this.storage, data)
          .then(_ => {
            this.getCommodities();
            this.isDbReady.next(true);
          })
          .catch(error => console.error(error));
      });
    }
/*    save(obj){
      this.storage.executeSql("insert into commodities (name,price,amount,img) values ('"+obj.name+"',"+obj.price+","+obj.amount+",'../../assets/catalog/ayam-bakar-lezza.png')")
    }*/

  // Get list
  getCommodities(){
    return this.storage.executeSql('SELECT * FROM commodities', []).then(res => {
      let items: Commodities[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,
            price: res.rows.item(i).price,img:res.rows.item(i).img,amount:res.rows.item(i).amount
           });
        }
      }
      this.songsList.next(items);
    });
  }
  // Add
  addCommodity(obj) {
    let data = [obj.name, obj.price,2,'../../assets/catalog/salad-merdeka.png'];
    return this.storage.executeSql('INSERT INTO commodities (name, price,amount,img) VALUES (?,?, ?,?)', data)
  }

  // Get single object
  getCommodity(id): Promise<Commodities> {
    return this.storage.executeSql('SELECT * FROM commodities WHERE id = ?', [id]).then(res => {
      return {
        id: res.rows.item(0).id,
        name: res.rows.item(0).name,
        price: res.rows.item(0).price,img:res.row.item(0).img,amount:res.row.item(0).amount
      }
    });
  }

  // Update
  updateCommodity(id, commodity: Commodities) {
    let data = [commodity.name, commodity.price];
    return this.storage.executeSql(`UPDATE commodities SET name = ?, price = ? WHERE id = ${id}`, data)
    .then(data => {
      this.getCommodities();
    })
  }

  // Delete
  deleteCommodity(id) {
    return this.storage.executeSql('DELETE FROM commodities WHERE id = ?', [id])
    .then(_ => {
      this.getCommodities();
    });
  }
}
