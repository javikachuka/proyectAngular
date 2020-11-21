import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from '../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  API_AFIP = 'http://afip.com/' ;
  constructor(private httpClient: HttpClient) {

  }

  get(){
    return this.httpClient.get(this.API_AFIP + 'personas') ;
  } ;

  getId(id : any){
    return this.httpClient.get(this.API_AFIP + 'personas/' + id ) ;
  } ;

  save(persona: Persona){
    // const headers = new HttpHeaders({'Content-Type':'application/json'}) ;
    return this.httpClient.post(this.API_AFIP + 'personas', persona ) ;
  }

  update(persona: Persona){
    return this.httpClient.put(this.API_AFIP+ 'personas', persona) ;
  }

  delete(id: any){
    return this.httpClient.delete(this.API_AFIP + 'personas/' + id) ;
  }

}
