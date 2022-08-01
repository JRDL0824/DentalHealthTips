import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElevenPageRoutingModule } from './eleven-routing.module';

import { ElevenPage } from './eleven.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElevenPageRoutingModule
  ],
  declarations: [ElevenPage]
})
export class ElevenPageModule {}
