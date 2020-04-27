import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @Output() peliculaBuscada: EventEmitter<string> = new EventEmitter<string>()
  buscar:string;
  constructor() { }

  ngOnInit(): void {
  }

  buscarPeli(){
    if(this.buscar){
      this.peliculaBuscada.emit(this.buscar);
    }
  }

}
