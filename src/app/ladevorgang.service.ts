import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LadevorgangService {
  private loaderSubject = new BehaviorSubject<boolean>(false);
  public loaderState = this.loaderSubject.asObservable();

  constructor() { }
  showLoader() {
    this.loaderSubject.next(true);
  }

  hideLoader() {
    this.loaderSubject.next(false);
  }
}
