import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommoditiesPage } from './commodities.page';

const routes: Routes = [
  {
    path: '',
    component: CommoditiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommoditiesPageRoutingModule {}
