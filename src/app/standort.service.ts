import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StandortService {

  constructor() { }

  getStandort() {
    return "Volkdorf";
  }
}
