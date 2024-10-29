// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaMoedasComponent } from './lista-moedas/lista-moedas.component';
import { ConversorComponent } from './conversor/conversor.component';
import { HistoricoComponent } from './historico/historico.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota para a página inicial
  { path: 'lista-moedas', component: ListaMoedasComponent }, // Rota para a lista de moedas
  { path: 'conversor', component: ConversorComponent }, // Rota para o conversor
  { path: 'historico', component: HistoricoComponent }, // Rota para o histórico de conversões
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirecionar qualquer rota desconhecida para a página inicial
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
