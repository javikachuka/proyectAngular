import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DireccionesService {

  API_AFIP = 'http://afip.com/' ;
  constructor(private httpClient : HttpClient) {

  }

  getPaises(){
    return this.httpClient.get(this.API_AFIP+'paises') ;
  }

  getProvincias(id : any){
    return this.httpClient.get(this.API_AFIP + 'provincias/' + id) ;
  }

  getLocalidades(id : any){
    return this.httpClient.get(this.API_AFIP + 'localidades/' + id) ;
  }
}
