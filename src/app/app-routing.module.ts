import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ViajeComponent} from './viaje/viaje.component';
import {DetalleViajesComponent} from './detalle-viajes/detalle-viajes.component';


const routes: Routes = [
  { path: 'viajes', component: ViajeComponent},
  { path: 'detail/:id', component: DetalleViajesComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
