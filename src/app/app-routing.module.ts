import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CVComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'Accueil',component:AccueilComponent},
  {path:'CV',component:CVComponent},
  {path:'Contact',component:ContactComponent},
  {path:'**',component:AccueilComponent, pathMatch :'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
