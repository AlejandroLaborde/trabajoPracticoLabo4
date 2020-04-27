import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];
  @Output() detallePelicula : EventEmitter<Pelicula> = new EventEmitter<Pelicula>();

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.peliculas);
  }

  verDetalle( pelicula ){
    
    this.detallePelicula.emit(pelicula);
  }



}
