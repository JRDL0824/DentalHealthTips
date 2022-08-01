import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TenPageRoutingModule } from './ten-routing.module';

import { TenPage } from './ten.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TenPageRoutingModule
  ],
  declarations: [TenPage]
})
export class TenPageModule {}
