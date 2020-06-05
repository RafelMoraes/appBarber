import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmConfirmAgendamPageRoutingModule } from './adm-confirm-agendam-routing.module';

import { AdmConfirmAgendamPage } from './adm-confirm-agendam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmConfirmAgendamPageRoutingModule
  ],
  declarations: [AdmConfirmAgendamPage]
})
export class AdmConfirmAgendamPageModule {}
