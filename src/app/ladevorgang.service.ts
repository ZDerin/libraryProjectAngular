import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LadevorgangService {
  private loaderSubject = new BehaviorSubject<boolean>(false);
  public loaderState = this.loaderSubject.asObservable();
  isVisible: boolean = false;

  constructor() { }
  showLoader() {
    this.isVisible = true;
    this.loaderSubject.next(true);
  }

  hideLoader() {
    this.isVisible = false;
    this.loaderSubject.next(false);
  }
}
