import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcommodityPage } from './addcommodity.page';

const routes: Routes = [
  {
    path: '',
    component: AddcommodityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcommodityPageRoutingModule {}
