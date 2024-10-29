import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Conversao {
  data: string;
  hora: string;
  valor: number;
  moedaOrigem: string;
  moedaDestino: string;
  taxa: number;
  resultado: number;
}

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  private readonly STORAGE_KEY = 'conversoes_historico';
  private historicoSubject: BehaviorSubject<Conversao[]>;

  constructor() {
    const historicoSalvo = this.carregarHistorico();
    this.historicoSubject = new BehaviorSubject<Conversao[]>(historicoSalvo);
  }

  private carregarHistorico(): Conversao[] {
    const historicoStr = localStorage.getItem(this.STORAGE_KEY);
    return historicoStr ? JSON.parse(historicoStr) : [];
  }

  private salvarHistorico(historico: Conversao[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(historico));
    this.historicoSubject.next(historico);
  }

  getHistorico(): Conversao[] {
    return this.historicoSubject.value;
  }

  getHistoricoObservable(): Observable<Conversao[]> {
    return this.historicoSubject.asObservable();
  }

  adicionarConversao(conversao: Conversao): void {
    const historico = this.getHistorico();
    historico.unshift(conversao); // Adiciona a conversão no início do histórico
    this.salvarHistorico(historico);
  }

  excluirConversao(index: number): void {
    const historico = this.getHistorico();
    if (index >= 0 && index < historico.length) {
      historico.splice(index, 1); // Remove a conversão pelo índice
      this.salvarHistorico(historico);
    }
  }

  getConversoesAltoValor(limite: number): Conversao[] {
    return this.getHistorico().filter(conversao => conversao.valor > limite);
  }

  limparHistorico(): void {
    this.salvarHistorico([]); // Limpa o histórico
  }
}
