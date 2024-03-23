import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getProducts() :Observable<any[]>{
    return this.http.get<any[]>('https://dummyjson.com/products')
  }
  getSingleProduct(id:number) :Observable<any[]>{
    return this.http.get<any[]>(`https://dummyjson.com/products/${id}`)
  }
}
