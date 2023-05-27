import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoadingService } from './loading.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api = "http://localhost:3000";
  constructor(private loadingService: LoadingService, private httpClient: HttpClient) { }


  getAllProducts(): Observable<any[]> {
    return this.httpClient.get(this.api+"/products") as Observable<any[]>; 
  }

  getSimillarProducts(): Observable<any> {
    return this.httpClient.get(this.api+"/simillarProducts");
  }

  public getSingleProduct(id: number): Observable<any> {
    return this.httpClient.get(this.api+"/products/"+id);
  }
}
