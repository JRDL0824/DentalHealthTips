import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TenPage } from './ten.page';

const routes: Routes = [
  {
    path: '',
    component: TenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenPageRoutingModule {}
