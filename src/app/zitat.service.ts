import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Zitat} from "./interfaces"

@Injectable({
  providedIn: 'root'
})
export class ZitatService {

  private getZitatUrl : string = "/getZitat"

  constructor(private http: HttpClient) {
  }

  getZufallsZitat() {
    const headers = {
      'content-type': 'application/json',
      'authorization:' : `Bearer ${localStorage.getItem('token')}`};
    return this.http.get<any>(this.getZitatUrl, {headers})
  }
}
