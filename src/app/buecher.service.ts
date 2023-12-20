import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuecherService {

  constructor() { }

  getTIDs() {
    return ["T014812676", "T02135272X"];
  }

  updateBuch(gesuchteTID: string, istVerfuegbar: boolean) {

  }
}
