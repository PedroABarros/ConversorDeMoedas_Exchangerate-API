import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-moedas',
  templateUrl: './lista-moedas.component.html',
  styleUrls: ['./lista-moedas.component.css']
})
export class ListaMoedasComponent {
  @Input() moedas: any[] = [];
}