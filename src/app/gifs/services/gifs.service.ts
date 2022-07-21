import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, GIf } from '../interface/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey : string = 'wlmNCGP6gHR6foiNlvnhxr1EHnYORTKX'
  private _historial:string[]= [];
  private servicioUrl = 'https://api.giphy.com/v1/gifs'

  public resultados:GIf[] =[] 

  get historial(){
    return [...this._historial]
  }

  constructor(private http: HttpClient){
    this._historial = JSON.parse(localStorage.getItem('historial')!) || []
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || []
  
  //   if ( localStorage.getItem('historial')) {
  //     this._historial = JSON.parse(localStorage.getItem('historial')!) 
      
  //   }
  }
  
  // vamos a limitar la cantidad de insersiones  a 10
  buscarGifs(query:string =''){
    
    query = query.trim().toLocaleLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial',JSON.stringify(this._historial))
   
    }

    const params = new HttpParams()
      .set('api_key',this.apiKey)
      .set('limit', '10')
      .set('q',query);

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params})
        .subscribe((resp) =>{
          // console.log(resp.data);
          this.resultados = resp.data
          localStorage.setItem('resultados',JSON.stringify(this.resultados))
        })
  }

 
}
