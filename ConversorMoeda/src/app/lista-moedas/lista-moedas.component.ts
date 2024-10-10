import { Component, OnInit } from '@angular/core';
import { MoedaService } from '../moedas/moeda.service';

@Component({
  selector: 'app-moeda-list',
  templateUrl: './lista-moedas.component.html',
  styleUrls: ['./lista-moedas.component.css']
})
export class MoedaListComponent implements OnInit {
  moedas: any[] = [];
  displayedColumns: string[] = ['symbol', 'name'];

  constructor(private moedaService: MoedaService) { }

  ngOnInit(): void {
    this.moedaService.getMoedas().subscribe(data => {
      this.moedas = data.supported_codes;
    });
  }
}
