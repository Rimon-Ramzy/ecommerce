import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  fev = new BehaviorSubject(0)
  constructor(private _http: HttpClient) { }


  getFev(): BehaviorSubject<number> {
    return this.fev
  }

  ubdateFav(newValue: number) {
    this.fev.next(newValue)
  }

  getAllProducts(): Observable<any> {
    return this._http.get(`https://fakestoreapi.com/products`)
  }
  createNewCart(model: any): Observable<any> {
    return this._http.post(`https://fakestoreapi.com/carts`, model)
  }
  getCategories(): Observable<any> {
    return this._http.get(`https://fakestoreapi.com/products/categories`)
  }
  getProductsByCategory(keyword: string): Observable<any> {
    return this._http.get(`https://fakestoreapi.com/products/category/${keyword}`)
  }
  getProductById(id: any): Observable<any> {
    return this._http.get(`https://fakestoreapi.com/products/${id}`)
  }

  getAllCarts(param?: any) {
    let params = new HttpParams;
    params = params.append("startdate", param?.start).append('enddate', param?.end)
    if (param == undefined) {
      return this._http.get(`https://fakestoreapi.com/carts`)
    } else {
      return this._http.get(`https://fakestoreapi.com/carts`, { params })
    }
  }

  deleteFromCarts(id: number) {
    return this._http.delete(`https://fakestoreapi.com/carts/${id}`)
  }
  createProduct(modal: any) {
    return this._http.post(`https://fakestoreapi.com/products`, modal)
  }
  updateProduct(id: any, modal: any) {
    return this._http.put(`https://fakestoreapi.com/products/${id}`, modal)
  }
}
