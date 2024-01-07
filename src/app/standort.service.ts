import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Standort, UserJwt} from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class StandortService {

  private getLocationsUrl : string = "/getLocations"
  //unnötig, weil als requestparam gut funktioniert
// private setLocationUrl: string = "/changeLocation";

 constructor(private http: HttpClient) { }

 getStandort() {
   const headers = {
   'content-type': 'application/json',
   'authorization' : `Bearer ${localStorage.getItem('token')}`};
   return this.http.get<Standort[]>(this.getLocationsUrl, {headers});
   //return ["Bücherhalle Altona", "Barmbek", "Volksdorf"];
 }

 getfilteredStandort(searchTerm : string, standorte : Standort[]) : Standort [] {
 return standorte.filter(a => a.name.toLowerCase().includes(searchTerm.toLowerCase()))
 }

 //unnötig, weil als requestparam gut funktioniert
/*
setActualLocation(location: string){
  const headers = {
    'content-type': 'application/json',
    'authorization': `Bearer ${localStorage.getItem('token')}`
  };
  return this.http.post<string>( this.setLocationUrl, location, {headers})
}*/
}
