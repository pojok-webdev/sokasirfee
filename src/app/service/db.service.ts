// db.service.ts

import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Commodities } from '../services/commodities';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})

export class DbService {
  private storage: SQLiteObject;
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
  doInit(){
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'positronx_db.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.storage = db;
          this.getFakeData();
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
        'assets/init.sql',
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

  // Get list
  getCommodities(){
    return this.storage.executeSql('SELECT * FROM commodities', []).then(res => {
      let items: Commodities[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,
            price: res.rows.item(i).price,img:'',amount:1
           });
        }
      }
      this.songsList.next(items);
    });
  }

  // Add
  addCommodity(artist_name, song_name) {
    let data = [artist_name, song_name];
    return this.storage.executeSql('INSERT INTO commodities (name, price) VALUES (?, ?)', data)
    .then(res => {
      this.getCommodities();
    });
  }

  // Get single object
  getCommodity(id): Promise<Commodities> {
    return this.storage.executeSql('SELECT * FROM commodities WHERE id = ?', [id]).then(res => {
      return {
        id: res.rows.item(0).id,
        name: res.rows.item(0).name,
        price: res.rows.item(0).price,img:'',amount:1
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
