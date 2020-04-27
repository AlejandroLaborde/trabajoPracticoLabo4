import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  favoritos: Pelicula[] = [];

  constructor( private htppClient: HttpClient ) { 
    
    if(localStorage.getItem('pelisFav') != null ){

      this.favoritos = JSON.parse(localStorage.getItem('pelisFav'));
    }
  }


  obtenerPeliculas( pelicula:string ){
   return this.htppClient.get(`http://www.omdbapi.com/?s=${pelicula}&apikey=a8d854de&plot=full`);
  }

  obtenerDetallePelicula( id: string ){
    return this.htppClient.get(`http://www.omdbapi.com/?i=${id}&apikey=a8d854de`);
  }

  obtenerFavoritos(){
    return this.favoritos;
  }

  guardarEnFavoritos( pelicula: Pelicula ){
    this.favoritos.push(pelicula);
    localStorage.setItem('pelisFav', JSON.stringify(this.favoritos));
  }


}
