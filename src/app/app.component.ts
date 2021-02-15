import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { DbService } from './service/db.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Catalog',
      url: '/commodities',
      icon: 'apps-outline'
    },
    {
      title:'Home',
      url:'/folder/home',
      icon:'home-outline'
    },
    {
      title:'Settings',
      url:'/settings',
      icon:'settings-outline'
    }

  ];
  public labels = ['PadiNET', 'Kasir'];

  constructor(
    private platform: Platform,private db: DbService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.db.doInit()
      this.db.getRealdata()
//      this.statusBar.styleDefault();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
