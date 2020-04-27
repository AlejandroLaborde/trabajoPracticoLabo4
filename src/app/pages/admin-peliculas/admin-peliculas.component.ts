import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-admin-peliculas',
  templateUrl: './admin-peliculas.component.html',
  styleUrls: ['./admin-peliculas.component.css']
})
export class AdminPeliculasComponent implements OnInit {

  detallesPeliculaActual: Pelicula;
  eliminarEstaPelicula : Pelicula;
  peliculas : Pelicula[]=[];
  name:string;
  pelicula = 'hero';
  subscripcion;


  constructor( private peliculasService: PeliculasService ) {


    
   }

  ngOnInit(): void { 
    this.subscripcion = this.peliculasService.obtenerPeliculas( this.pelicula ).subscribe( (resp:any) =>{
      const films = resp.Search;
      console.log(films);
      films.forEach(element => {
          const aux = new Pelicula(element.Title,element.Year,element.Poster, element.imdbID);
          this.peliculas.push( aux );
      });

    }, errores=>{
      console.log(errores);
    })
  }
  
  buscarPelicula( peliBuscada ){
    console.log(peliBuscada);
    this.peliculas=[];
    //this.subscripcion.unsubscribe();
    this.subscripcion = this.peliculasService.obtenerPeliculas( peliBuscada ).subscribe( (resp:any) =>{
      const films = resp.Search;
      console.log(films);
      films.forEach(element => {
          const aux = new Pelicula(element.Title,element.Year,element.Poster, element.imdbID);
          this.peliculas.push( aux );
      });

    }, errores=>{
      console.log(errores);
    })
  }
  
  agregarAfav( e ){
    
    this.peliculasService.guardarEnFavoritos( e );
  }

  recibirDetallePelicula( e : Pelicula ){
    console.log(e);
    this.peliculasService.obtenerDetallePelicula(e.id).subscribe( (resp:any)=>{
      console.log(resp);
      e.descripcion = resp.Plot;
      e.produccion = resp.Production;
      e.genero = resp.Genre;
      this.detallesPeliculaActual = e;
    })
  }

  recibirPeliculaAEliminar( peliculaAEliminar ){

    let indice;
    for (let index = 0; index < this.peliculas.length; index++) {
      if ( this.peliculas[index].id === peliculaAEliminar.id){
        indice = index;
        
      }
    }
    if(indice){
      this.peliculas.splice(indice,1);
    }


  }

}
