import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';
import { GIf, SearchGifsResponse } from '../../gifs/interface/gifs.interfaces';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {
  public resultados:GIf[] =[] 
  get historial(){
    return this.gifsService.historial
  }

  buscar(item:string){
    this.gifsService.buscarGifs(item)
  }


  

  constructor(private gifsService: GifsService){}


  

}
