import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdensServicoComponent } from './ordens-servico/ordens-servico.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ordens-servico', component: OrdensServicoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
