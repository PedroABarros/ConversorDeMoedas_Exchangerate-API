// moeda.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';

// Interface para a resposta da API de conversão de moedas
export interface ICurrencyResponse {
  result: string;
  documentation: string;
  terms_of_use: string;
  base_code: string;
  conversion_rates: { [key: string]: number }; // Taxas de conversão
  supported_codes?: [string, string][]; // Lista de códigos suportados (adicionado)
}

// Interface para representar uma moeda
export interface Moeda {
  symbol: string;
  name: string;
}

// Interface para o resultado da conversão
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

  // Método para listar todas as moedas suportadas
  listarMoedas(): Observable<Moeda[]> {
    const url = `${environment.api_url}/${environment.apiKey}/codes`;
    return this.http.get<ICurrencyResponse>(url, this.getHeaders()).pipe(
      map(response => {
        console.log('Resposta da API para listar moedas:', response); // Adiciona log para depuração
        if (response && response.supported_codes) {
          return response.supported_codes.map(code => ({
            symbol: code[0], // Apenas o símbolo
            name: code[1]    // Nome completo para exibição
          }));
        } else {
          throw new Error('Não foi possível obter a lista de moedas.');
        }
      }),
      catchError(error => {
        console.error('Erro ao listar moedas:', error);
        return throwError('Erro ao obter a lista de moedas.');
      })
    );
  }
  
  // Método para obter a taxa de câmbio de uma moeda base
  obterTaxaCambio(moedaBase: string): Observable<ICurrencyResponse> {
    const url = `${environment.api_url}/${environment.apiKey}/latest/${moedaBase}`;
    return this.http.get<ICurrencyResponse>(url, this.getHeaders());
  }

  // Método para converter uma moeda
  converterMoeda(moedaOrigem: string, moedaDestino: string, valor: number): Observable<ResultadoConversao> {
    return this.obterTaxaCambio(moedaOrigem).pipe(
      map(response => {
        if (response && response.conversion_rates && response.conversion_rates[moedaDestino]) {
          const taxaDestino = response.conversion_rates[moedaDestino];
          const valorConvertido = valor * taxaDestino; // Atualização na conversão
          return {
            valorConvertido: valorConvertido,
            taxa: taxaDestino
          };
        } else {
          console.error('Resposta da API não contém as taxas de câmbio esperadas:', response);
          throw new Error('Não foi possível obter as taxas de câmbio.');
        }
      }),
      catchError(error => {
        console.error('Erro na conversão:', error);
        return throwError('Erro na conversão. Tente novamente mais tarde.');
      })
    );
  }
}
