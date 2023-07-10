import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasharingService {
  private dataSource = new BehaviorSubject('initial value');
  public data = this.dataSource.asObservable();

  constructor() { }

  updateData(value: any) {
    this.dataSource.next(value);
  }
}
