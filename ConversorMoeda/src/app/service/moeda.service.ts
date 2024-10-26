import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment.development';

export interface ICurrencyResponse {
  result: string;
  documentation: string;
  terms_of_use: string;
  supported_codes: string[][];
}

export interface Moeda {
  symbol: string;
  name: string;
}

export interface ResultadoConversao {
  valorConvertido: number;
  taxa: number;
}

@Injectable({
  providedIn: 'root'
})
export class MoedaService {
  constructor(private http: HttpClient) {}

  private getHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  listarMoedas(): Observable<Moeda[]> {
    const url = `${environment.api_url}/${environment.apiKey}/codes`;
    return this.http.get<ICurrencyResponse>(url, this.getHeaders()).pipe(
      map(response => {
        console.log('Resposta da API:', response);
        return response.supported_codes.map(code => ({
          symbol: code[0],
          name: code[1]
        }));
      })
    );
  }

  obterTaxaCambio(moedaBase: string): Observable<any> {
    const url = `${environment.api_url}/${environment.apiKey}/latest/${moedaBase}`;
    return this.http.get(url, this.getHeaders());
  }

  converterMoeda(moedaOrigem: string, moedaDestino: string, valor: number): Observable<ResultadoConversao | null> {
    return this.obterTaxaCambio(moedaOrigem).pipe(
      map(response => {
        if (response && response.rates && response.rates[moedaDestino]) {
          const taxa = response.rates[moedaDestino];
          return {
            valorConvertido: valor * taxa,
            taxa: taxa
          };
        }
        return null;
      })
    );
  }
}
