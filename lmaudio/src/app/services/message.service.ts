import { Injectable } from '@angular/core';
import { Subject,observable, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  subject =new Subject();

  constructor() { }

  setMsg(msg:any){
    this.subject.next(msg);
    setTimeout(() => {
      this.subject.next({msg:''})
    }, 3000);
  }

  getMsg():Observable<any>{
    return this.subject.asObservable()
  }
}
