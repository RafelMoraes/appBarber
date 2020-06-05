import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmAgendamentosPage } from './adm-agendamentos.page';

const routes: Routes = [
  {
    path: '',
    component: AdmAgendamentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmAgendamentosPageRoutingModule {}
