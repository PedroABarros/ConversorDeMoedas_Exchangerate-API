import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoedaService {
    private apiUrl = 'https://v6.exchangerate-api.com/v6/YOUR_API_KEY/codes';

  constructor(private http: HttpClient) { }

  getMoedas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
