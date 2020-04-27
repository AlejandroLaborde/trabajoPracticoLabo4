import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPeliculasComponent } from './pages/admin-peliculas/admin-peliculas.component';


const routes: Routes = [
  {path: 'peliculas', component: AdminPeliculasComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'peliculas'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
