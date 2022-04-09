import { Injectable } from '@angular/core';
import { baseUrl } from '../config/api';
import { Quot } from "../models/quot"
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class QuotService {
  apiUrl = baseUrl + '/quotation'
  quot: Quot[] = [];


  constructor(private http: HttpClient) { }
  getSingleQuot(id: string): Observable<Quot> {
    return this.http.get<Quot>(this.apiUrl + '/' + id)
  }
  getQuot(): Observable<Quot[]> {
    return this.http.get<Quot[]>(this.apiUrl+'/find-quot').pipe(
      map((quot) => {
        return quot.map(quot => {
          quot._id = quot._id
          delete quot._id
          return quot
        })
      })
    )
  }
  addQuot(quot): Observable<Quot> {
    quot.active = true;
    quot.date = new Date();

    return this.http.post<Quot>(this.apiUrl, quot)
  }

  removeQuot(id:string): Observable<any> {
    return this.http.delete(this.apiUrl +'/delete-quot/'+id)
  }

  updateQuot(quot): Observable<any> {
    return this.http.put(this.apiUrl + '/' + quot.id, quot)
  }


}

