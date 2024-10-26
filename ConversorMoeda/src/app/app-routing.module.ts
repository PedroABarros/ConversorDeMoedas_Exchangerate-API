import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaMoedasComponent } from './lista-moedas/lista-moedas.component';
import { ConversorComponent } from './conversor/conversor.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'lista-moedas', component: ListaMoedasComponent },
  { path: 'conversor', component: ConversorComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
