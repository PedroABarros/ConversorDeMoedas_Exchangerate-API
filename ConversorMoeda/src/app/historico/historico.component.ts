// src/app/historico/historico.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HistoricoService, Conversao } from '../service/historico.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html', // Certifique-se de que este caminho está correto
  styleUrls: ['./historico.component.scss'] // Certifique-se de que este caminho está correto
})
export class HistoricoComponent implements OnInit, OnDestroy {
  historico: Conversao[] = [];
  limiteAltoValor: number = 1000;
  private historicoSubscription!: Subscription;

  constructor(private historicoService: HistoricoService) { }

  ngOnInit(): void {
    this.historicoSubscription = this.historicoService.getHistoricoObservable()
      .subscribe(historico => {
        this.historico = historico;
      });
  }

  ngOnDestroy(): void {
    if (this.historicoSubscription) {
      this.historicoSubscription.unsubscribe();
    }
  }

  limparHistorico(): void {
    this.historicoService.limparHistorico();
  }

  excluirConversao(index: number): void {
    this.historicoService.excluirConversao(index);
  }

  conversoesAltoValor(): Conversao[] {
    return this.historicoService.getConversoesAltoValor(this.limiteAltoValor);
  }
}
