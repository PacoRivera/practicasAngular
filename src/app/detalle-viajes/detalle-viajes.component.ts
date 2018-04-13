import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Viaje} from '../viaje';

import {HeroService} from '../hero.service';

@Component({
  selector: 'app-detalle-viajes',
  templateUrl: './detalle-viajes.component.html',
  styleUrls: ['./detalle-viajes.component.css']
})
export class DetalleViajesComponent implements OnInit {

  @Input() viaje: Viaje;

  constructor(
    private route: ActivatedRoute,
    private viajeService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getViaje();
  }

  getViaje(): void {
    const id =+ this.route.snapshot.paramMap.get('id');
    this.viajeService.getViaje(id)
      .subscribe(viaje => this.viaje = viaje);
  }

  goBack(): void {
    this.location.back();
  }
}
