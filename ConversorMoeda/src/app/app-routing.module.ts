
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaMoedasComponent } from './lista-moedas/lista-moedas.component';
import { ConversorComponent } from './conversor/conversor.component';
import { HistoricoComponent } from './historico/historico.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'lista-moedas', component: ListaMoedasComponent }, 
  { path: 'conversor', component: ConversorComponent }, 
  { path: 'historico', component: HistoricoComponent }, 
  { path: '**', redirectTo: '', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
