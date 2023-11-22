import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetProductsService {
  private apiUrl =
    'https://oxas3nc6p4.execute-api.us-east-1.amazonaws.com/primera';

  constructor(private http: HttpClient) {}

  obtenerDatos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
}
