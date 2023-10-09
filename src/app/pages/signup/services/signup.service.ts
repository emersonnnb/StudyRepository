import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private httpClient: HttpClient
  ) { }


  public postLoin(payload: ProductModel): Observable<ProductModel> {
    return this.httpClient.post<ProductModel>(`${environment.apiUrl}/produtos`, payload);
  };

}
