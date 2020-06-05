import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmConfirmAgendamPage } from './adm-confirm-agendam.page';

const routes: Routes = [
  {
    path: '',
    component: AdmConfirmAgendamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmConfirmAgendamPageRoutingModule {}
