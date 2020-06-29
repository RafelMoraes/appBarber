import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule,
      )
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'agendamento',
    loadChildren: () => import('./agendamento/agendamento.module').then( m => m.AgendamentoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-perfil',
    loadChildren: () => import('./edit-perfil/edit-perfil.module').then( m => m.EditPerfilPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'adm-agendamentos',
    loadChildren: () => import('./adm-agendamentos/adm-agendamentos.module').then( m => m.AdmAgendamentosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'adm-confirm-agendam',
    loadChildren: () => import('./adm-confirm-agendam/adm-confirm-agendam.module').then( m => m.AdmConfirmAgendamPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'recup-senha',
    loadChildren: () => import('./recup-senha/recup-senha.module').then( m => m.RecupSenhaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'contato',
    loadChildren: () => import('./contato/contato.module').then( m => m.ContatoPageModule ),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
