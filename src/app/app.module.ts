import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPeliculasComponent } from './pages/admin-peliculas/admin-peliculas.component';
import { ListadoPeliculasComponent } from './components/listado-peliculas/listado-peliculas.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { FavoritoPeliculaComponent } from './components/favorito-pelicula/favorito-pelicula.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPeliculasComponent,
    ListadoPeliculasComponent,
    DetallePeliculaComponent,
    FavoritoPeliculaComponent,
    CabeceraComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
