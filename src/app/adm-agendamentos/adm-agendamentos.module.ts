import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmAgendamentosPageRoutingModule } from './adm-agendamentos-routing.module';

import { AdmAgendamentosPage } from './adm-agendamentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmAgendamentosPageRoutingModule
  ],
  declarations: [AdmAgendamentosPage]
})
export class AdmAgendamentosPageModule {}
