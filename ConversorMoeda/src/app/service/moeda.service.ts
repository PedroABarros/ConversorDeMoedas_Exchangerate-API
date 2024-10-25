import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';


export interface ICurrencyResponse {
  result: string;
  documentation: string;
  terms_of_use: string;
  supported_codes: string[][];
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  service: any;
  constructor(private http: HttpClient) { }
  private apiUrl = 'https://v6.exchangerate-api.com/v6/';

  

  getHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

    listarMoedas(): Observable<ICurrencyResponse> {
    const url = `${environment.api_url}/${environment.apiKey}/codes`;
    return this.http.get<ICurrencyResponse>(url, this.getHeaders());
  }

    obterTaxaCambio(moedaBase: string): Observable<any> {
    const url = `${environment.api_url+"language=pt-BR"}/${environment.apiKey}/latest/${moedaBase}`;
    return this.http.get(url, this.getHeaders());
  }
}