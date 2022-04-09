import { Injectable } from '@angular/core';
import { baseUrl } from 'src/app/config/api';
import { Products } from "src/app/models/products";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl =baseUrl+'/products'
  products: Products[]=[];


  constructor(private http:HttpClient) { }

  getSingleProduct(id: string): Observable<Products> {
    return this.http.get<Products>(this.apiUrl + '/' + id)
  }
  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.apiUrl).pipe(
      map((products) => {
        return products.map(product => {
          product.id = product._id
          delete product._id
          return product
        })
      })
    )/*.pipe(
      filter((products, index) => products.filter(product => product.active))
    )*/
  }

  uploadImage(image) {
    const data = new FormData()
    data.append('image', image)
    return this.http.post(this.apiUrl + '/upload', data)
  }

  addProduct(products): Observable<Products> {
    products.active = true;
    products.date = new Date();

    return this.http.post<Products>(this.apiUrl,products)
  }

  removeProduct(id: string): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id)
  }

  updateProduct(produdts):Observable<any>{
    return this.http.put(this.apiUrl+ '/'+produdts.id,produdts)
  }
  

}