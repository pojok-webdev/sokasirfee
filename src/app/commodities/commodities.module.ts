import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommoditiesPageRoutingModule } from './commodities-routing.module';

import { CommoditiesPage } from './commodities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommoditiesPageRoutingModule
  ],
  declarations: [CommoditiesPage]
})
export class CommoditiesPageModule {}
