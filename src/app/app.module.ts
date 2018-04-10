import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ViajeComponent } from './viaje/viaje.component';
import { DetalleViajesComponent } from './detalle-viajes/detalle-viajes.component';
import { HeroService } from './hero.service';


@NgModule({
  declarations: [
    AppComponent,
    ViajeComponent,
    DetalleViajesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
