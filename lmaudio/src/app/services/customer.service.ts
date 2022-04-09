import { Injectable } from '@angular/core';
import { baseUrl } from "src/app/config/api";
import { Customer } from "src/app/models/customer";
import { HttpClient } from "@angular/common/http";
import { Observable, observable } from "rxjs";
import { map,filter } from "rxjs/operators";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl =baseUrl+'/customer'
  customer:Customer[]=[];
  

  constructor(private http:HttpClient) { }

  getSingleCustomer(id: string):Observable<Customer>{
    return this.http.get<Customer>(this.apiUrl+'/'+id)
  }
  getCustomers():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.apiUrl).pipe(
        map((customer)=>{
          return customer.map(customer=>{
            customer.id =customer._id
            delete customer._id
            return customer
          })
        })
      )
  }

  addCustomer(customer):Observable<Customer> {
    customer.active=true;
    customer.date=new Date();

    return this.http.post<Customer>(this.apiUrl,customer)
  }

  removeCustomer(id:string):Observable<any>{
    return this.http.delete(this.apiUrl+'/'+id)
  }
  updateCustomer(customer):Observable<any>{
    
    return this.http.put(this.apiUrl + '/' + customer.id,customer)
  }

 

}
