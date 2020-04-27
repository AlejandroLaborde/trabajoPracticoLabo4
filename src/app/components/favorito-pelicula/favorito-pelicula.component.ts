import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-favorito-pelicula',
  templateUrl: './favorito-pelicula.component.html',
  styleUrls: ['./favorito-pelicula.component.css']
})
export class FavoritoPeliculaComponent implements OnInit {
  @Output() anadir: EventEmitter<Pelicula> = new EventEmitter<Pelicula>();
  @Input() paliFav : Pelicula;
  constructor() { }

  ngOnInit(): void {
  }

  anadirAfavoritos(){
    this.paliFav.favorita=true;
    this.anadir.emit( this.paliFav );
  }

}
