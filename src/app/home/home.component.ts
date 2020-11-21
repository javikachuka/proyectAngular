import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../services/personas.service';
import { Persona } from '../interfaces/persona';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  personas : Persona[] ;
  mensajeError : any ;

  constructor(private personasService : PersonasService , private spinner: NgxSpinnerService) {

    this.cargarTabla() ;

  }

  ngOnInit(): void {

  }

  borrar(id : any){
    this.personasService.delete(id).subscribe(
      (data) => {
        console.log(data) ;
        this.cargarTabla();
        alert('Borrado') ;

      },
      (error) => {
        console.log(error) ;
        alert('Hubo un error') ;
      }
  ) ;
  }

  cargarTabla(){
    this.spinner.show();
    this.personasService.get().subscribe(
      (personas: Persona[])  => {
        this.personas = personas ;
        this.spinner.hide();
      } ,
      (error) => {
        console.log(error) ;
        this.mensajeError = "Error en la respuesta del servidor. Intente mas tarde" ;
        this.spinner.hide();
      }
    ) ;
  }

}
