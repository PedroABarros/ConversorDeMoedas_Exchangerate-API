import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MoedaService, Moeda } from '../service/moeda.service';

@Component({
  selector: 'app-lista-moedas',
  templateUrl: './lista-moedas.component.html',
  styleUrls: ['./lista-moedas.component.scss']
})
export class ListaMoedasComponent implements OnInit {
  displayedColumns: string[] = ['symbol', 'name'];
  dataSource = new MatTableDataSource<Moeda>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private moedaService: MoedaService) {}

  ngOnInit(): void {
    this.moedaService.listarMoedas().subscribe((moedas) => {
      this.dataSource.data = moedas;
      console.log('Moedas carregadas:', moedas);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
