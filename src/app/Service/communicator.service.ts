import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {
  private filter = new Subject<String>();

  sendFilter(filter:String){
    this.filter.next(filter);
  }

  get Filter(){
    return this.filter.asObservable();
  }
}
