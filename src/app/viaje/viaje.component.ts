import { Component, OnInit } from '@angular/core';

import { Viaje } from '../viaje';

import { VIAJES } from '../mock-viajes';

import { HeroService } from '../hero.service';


@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.css']
})
export class ViajeComponent implements OnInit {


  viajes: Viaje[];

  // viajeSeleccionado: Viaje;

  // onSelect(viaje: Viaje): void {
  //   this.viajeSeleccionado = viaje;
  // }

  constructor(private viajeService: HeroService) { }

  ngOnInit() {
    this.getViajes();
  }

  //   forma sincrona
  // getViajes(): void {
  //   this.viajes = this.viajeService.getViajes();
  // }

  getViajes(): void {
    this.viajeService.getViajes()
      .subscribe(viajes => this.viajes = viajes);
  }

}
