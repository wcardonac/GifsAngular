import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {
/*
 @ViewChild('txtbuscar') dentro de los () va el elemto que se quiere buscar
 se puede buscar por directivas o por referecia en este caso lo vamos hs hacer
 por referencia #txtbuscar esto es del lado del html
*/
  @ViewChild('txtbuscar') txtbuscar!:ElementRef<HTMLInputElement>

  constructor(private gifsService: GifsService){}

  buscar(){
   const valor = this.txtbuscar.nativeElement.value;

   if (valor.trim().length===0) {
    return;
   }
  
    this.gifsService.buscarGifs(valor);

    this.txtbuscar.nativeElement.value = '';
  }
 

}
