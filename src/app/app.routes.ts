import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMaquinariaComponent } from './create-maquinaria/create-maquinaria.component';
import { CreateEquipoMenorComponent } from './create-equipo-menor/create-equipo-menor.component';
import { PrincipalComponent } from './principal/principal.component';

export const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'create-maquinaria', component: CreateMaquinariaComponent },
  { path: 'create-equipo_menor', component: CreateEquipoMenorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
