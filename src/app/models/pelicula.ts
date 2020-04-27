


export class Pelicula{

        titulo: string;
        fecha: number;
        imagen: string;
        id: string;
        favorita: boolean ;
        descripcion: string;
        genero:string;
        produccion:string
        

        constructor( titulo: string, fecha: number, imagen: string , id?:string){
            this.fecha = fecha;
            this.imagen = imagen;
            this.titulo = titulo;
            if(id){
                this.id=id;
            }
        }

}