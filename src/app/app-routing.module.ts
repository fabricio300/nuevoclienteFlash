import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './Paginas/login/login.module#LoginPageModule' },
  { path: 'inicio', loadChildren: './Paginas/inicio/inicio.module#InicioPageModule' },
  { path: 'status', loadChildren: './Paginas/status/status.module#StatusPageModule' },
  { path: 'guardados', loadChildren: './Paginas/guardados/guardados.module#GuardadosPageModule' },
  { path: 'lavanderia', loadChildren: './Paginas/lavanderia/lavanderia.module#LavanderiaPageModule' },
  { path: 'solicitud', loadChildren: './Paginas/solicitud/solicitud.module#SolicitudPageModule' },
  { path: 'seguimiento', loadChildren: './Paginas/seguimiento/seguimiento.module#SeguimientoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
