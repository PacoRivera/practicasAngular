import { Injectable } from '@angular/core';

import {Viaje} from './viaje';
import {VIAJES} from './mock-viajes';


@Injectable()
export class HeroService {

getViajes(): Viaje [] {
  return VIAJES;
}

  constructor() { }

}
