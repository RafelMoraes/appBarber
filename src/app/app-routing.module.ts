import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'agendamento',
    loadChildren: () => import('./agendamento/agendamento.module').then( m => m.AgendamentoPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'edit-perfil',
    loadChildren: () => import('./edit-perfil/edit-perfil.module').then( m => m.EditPerfilPageModule)
  },
  {
    path: 'adm-agendamentos',
    loadChildren: () => import('./adm-agendamentos/adm-agendamentos.module').then( m => m.AdmAgendamentosPageModule)
  },
  {
    path: 'adm-confirm-agendam',
    loadChildren: () => import('./adm-confirm-agendam/adm-confirm-agendam.module').then( m => m.AdmConfirmAgendamPageModule)
  },
  {
    path: 'recup-senha',
    loadChildren: () => import('./recup-senha/recup-senha.module').then( m => m.RecupSenhaPageModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./contato/contato.module').then( m => m.ContatoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
