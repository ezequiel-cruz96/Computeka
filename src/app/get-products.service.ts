import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetProductsService {
  private apiUrl =
    'https://oxas3nc6p4.execute-api.us-east-1.amazonaws.com/primera';

  public twilio = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  obtenerDatos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  sendMessage(product: any): Observable<any> {
    console.log(product.name + 'loque llega en el sto');
    return this.http.get<any>(
      `${this.twilio}/${product.name}/${product.phone}`
    );
  }
}
