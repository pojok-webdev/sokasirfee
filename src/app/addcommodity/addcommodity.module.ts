import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcommodityPageRoutingModule } from './addcommodity-routing.module';

import { AddcommodityPage } from './addcommodity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcommodityPageRoutingModule
  ],
  declarations: [AddcommodityPage]
})
export class AddcommodityPageModule {}
