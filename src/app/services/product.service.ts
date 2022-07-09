import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  allproducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  //function to create a new product.service';

  create(data: any): Observable<Product[]> {
    return this.http.post<Product[]>(this.apiUrl, data);
  }
  // function to edit a product.service

  get(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
  // update function for
  update(id: number, data: any): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, data);
  }
  // service to delete a product
  delete(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${id}`);
  }
}
