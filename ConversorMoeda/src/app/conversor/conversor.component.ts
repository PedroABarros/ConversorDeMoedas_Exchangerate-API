import { Component, OnInit } from '@angular/core';
import { MoedaService, Moeda, ResultadoConversao } from '../service/moeda.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.scss']
})
export class ConversorComponent implements OnInit {
  moedas: Moeda[] = [];
  moedaOrigem: string = '';
  moedaDestino: string = '';
  valorOrigem: number = 0;
  resultado: ResultadoConversao | null = null;
  mensagemErro: string = '';

  constructor(private moedaService: MoedaService) {}

  ngOnInit(): void {
    this.loadMoedas();
  }

  loadMoedas(): void {
    this.moedaService.listarMoedas().subscribe({
      next: (data) => {
        this.moedas = data;
      },
      error: (error) => {
        console.error('Erro ao carregar moedas:', error);
        this.mensagemErro = 'Erro ao carregar moedas. Tente novamente mais tarde.';
      }
    });
  }

  converter(): void {
    this.mensagemErro = '';
    this.resultado = null;

    if (!this.moedaOrigem || !this.moedaDestino) {
      this.mensagemErro = 'Selecione as moedas de origem e destino.';
      return;
    }

    if (!this.valorOrigem || this.valorOrigem <= 0) {
      this.mensagemErro = 'Digite um valor válido para conversão.';
      return;
    }

    this.moedaService.converterMoeda(this.moedaOrigem, this.moedaDestino, this.valorOrigem)
      .subscribe({
        next: (resultado) => {
          if (resultado) {
            this.resultado = resultado;
          } else {
            this.mensagemErro = 'Não foi possível realizar a conversão com as moedas selecionadas.';
          }
        },
        error: (error) => {
          console.error('Erro na conversão:', error);
          this.mensagemErro = 'Erro ao realizar a conversão. Tente novamente mais tarde.';
        }
      });
  }
}