import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMaquinariaComponent } from './create-maquinaria/create-maquinaria.component';
import { CreateEquipoMenorComponent } from './create-equipo-menor/create-equipo-menor.component';
import { CreateHerramientaComponent } from './create-herramienta/create-herramienta.component';
import { CreateMaterialConstruccionComponent } from './create-material-construccion/create-material-construccion.component';
import { CreateInsumosConsumiblesComponent } from './create-insumos-consumibles/create-insumos-consumibles.component';
import { PrincipalComponent } from './principal/principal.component';

export const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'create-maquinaria', component: CreateMaquinariaComponent },
  { path: 'create-equipo_menor', component: CreateEquipoMenorComponent },
  { path: 'create-herramienta', component: CreateHerramientaComponent },
  { path: 'create-material_construccion', component: CreateMaterialConstruccionComponent },
  { path: 'create-insumos_consumibles', component: CreateInsumosConsumiblesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
