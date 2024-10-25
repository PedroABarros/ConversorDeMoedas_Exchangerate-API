<<<<<<< HEAD
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface Moeda {
  symbol: string;
  name: string;
}
=======
import { Component, Input } from '@angular/core';
>>>>>>> d35afa472c3dedd45bf054cfcefcad844c5640a8

@Component({
  selector: 'app-lista-moedas',
  templateUrl: './lista-moedas.component.html',
<<<<<<< HEAD
  styleUrls: ['./lista-moedas.component.scss']
})
export class ListaMoedasComponent implements OnInit {
  displayedColumns: string[] = ['symbol', 'name'];
  dataSource = new MatTableDataSource<Moeda>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}

  ngOnInit(): void {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
=======
  styleUrls: ['./lista-moedas.component.css']
})
export class ListaMoedasComponent {
  @Input() moedas: any[] = [];
}
>>>>>>> d35afa472c3dedd45bf054cfcefcad844c5640a8
