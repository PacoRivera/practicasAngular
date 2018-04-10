import { Component, OnInit, Input } from '@angular/core';

import {Viaje} from '../viaje';

@Component({
  selector: 'app-detalle-viajes',
  templateUrl: './detalle-viajes.component.html',
  styleUrls: ['./detalle-viajes.component.css']
})
export class DetalleViajesComponent implements OnInit {

  @Input() viaje: Viaje;

  constructor() { }

  ngOnInit() {
  }

}
