import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  @Output() peliculaAEliminar: EventEmitter<Pelicula> = new EventEmitter<Pelicula>();
  @Input() detallesEntrada: Pelicula;

  constructor() { }

  ngOnInit(): void {
  }

  eliminarPelicula(){
    this.peliculaAEliminar.emit( this.detallesEntrada );
  }

}
