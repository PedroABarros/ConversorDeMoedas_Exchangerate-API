import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';  
import { MatIconModule } from '@angular/material/icon';      


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { ListaMoedasComponent } from './lista-moedas/lista-moedas.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ConversorComponent } from './conversor/conversor.component';

=======
import { MoedasComponent } from './moedas/moedas.component';
import { ListaMoedasComponent } from './lista-moedas/lista-moedas.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
>>>>>>> d35afa472c3dedd45bf054cfcefcad844c5640a8

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
<<<<<<< HEAD
    ListaMoedasComponent,
    ConversorComponent,
=======
    MoedasComponent,
    ListaMoedasComponent
>>>>>>> d35afa472c3dedd45bf054cfcefcad844c5640a8
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,   
    MatIconModule      
  ],
  providers: [
<<<<<<< HEAD
    provideAnimationsAsync()],
=======
    provideAnimationsAsync()
  ],
>>>>>>> d35afa472c3dedd45bf054cfcefcad844c5640a8
  bootstrap: [AppComponent]
})
export class AppModule { }
