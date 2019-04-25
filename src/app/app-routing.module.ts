import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { CadUsuarioComponent } from './pages/cadusuario/cadusuario.component';
import { PesquisaUsuarioComponent } from './pages/pesquisausuario/pesquisausuario.component';

/**
 * Definir as rotas de navegação para o site
 */
const routes: Routes = [
  {
    path:'', 
    component:LoginComponent 
  },
  {
    path:'principal',
    component:PrincipalComponent,
    children:[
        {
          path:"cad-usuario",
          component:CadUsuarioComponent
        },{
          path:'pesquisausuario',
          component:PesquisaUsuarioComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
