import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StandortService {

  Standorte : string[] = [];
  //private getLocations : string = "/getLocations"

  constructor(private http: HttpClient) { }

  getStandort() {
    //const headers = {
    //'content-type': 'application/json',
    //'authorization' : `Bearer
    // ${localStorage.getItem('token')}`
    // };

    //return this.http.get<any>(this.getLocations, {headers})
    return ["Altona", "Barmbek", "Volksdorf"];
  }

  getfilteredStandort(searchTerm : string, Standorte : string[]) : string [] {
  return Standorte.filter(a => a.includes(searchTerm))
  }
}
