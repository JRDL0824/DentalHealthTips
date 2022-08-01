import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElevenPage } from './eleven.page';

const routes: Routes = [
  {
    path: '',
    component: ElevenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElevenPageRoutingModule {}
