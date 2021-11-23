import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paste1/home/home.component';
import { SobreComponent } from './paste2/sobre/sobre.component';
import { ContatoComponent } from './paste3/contato/contato.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent},
    {
      path:'sobre',
      component:SobreComponent
    },
    {
      path:'contato',
      component:ContatoComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
