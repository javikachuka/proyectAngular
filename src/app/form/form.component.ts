import { Component, OnInit } from '@angular/core';
import { Persona } from '../interfaces/persona';
import { PersonasService } from '../services/personas.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { DireccionesService } from '../services/direcciones.service';
import { Pais } from '../interfaces/pais';
import { Provincia } from '../interfaces/provincia';
import { Localidad } from '../interfaces/localidad';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  persona : Persona = {
    nombre:     null,
    apellido:   null,
    email:      null,
    password:   null,
  }

  persona_id : any ;
  editing : boolean = false ;
  paises = [] ;
  provincias = [] ;
  localidades = [] ;


  constructor(private personaService: PersonasService, private actRoute: ActivatedRoute, private location: Location ,private direccionService : DireccionesService ) {
    this.persona_id = this.actRoute.snapshot.params.id ;
    if(this.persona_id){
      this.editing = true ;
    }else{
      this.editing = false ;
    }

    this.direccionService.getPaises().subscribe(
      (paises : Pais[]) => {
        this.paises = paises ;
      }
    ) ;
  }

  ngOnInit(): void {
    if(this.editing){
      this.personaService.getId(this.persona_id).subscribe(
        (persona: Persona)  => {
          this.persona = persona ;
          this.formPersonas.patchValue(persona)
        } ,
        (error) => {
          console.log(error) ;
          alert('Ocurrio un error') ;
        }
      ) ;
    }
  }

  formPersonas = new FormGroup({
    nombre : new FormControl('', Validators.required) ,
    apellido : new FormControl('', Validators.required) ,
    email : new FormControl('', [Validators.required,  Validators.email] ) ,
    password : new FormControl('', [Validators.required, Validators.minLength(8)]),
  }) ;




  get f (){
    return this.formPersonas.controls ;
  }

  guardarPersona(){
    if(!this.formPersonas.invalid){
      if(this.editing){
        this.personaService.update(this.persona).subscribe(
          (data)  => {
            alert('Pelicula Actualizada');
          } ,
          (error) => {
            console.log(error) ;
            alert('Ocurrio un error') ;
          }
        ) ;
      }else{
        this.persona = this.formPersonas.value ;
        this.personaService.save(this.persona).subscribe(
          (data)  => {
            // alert('Persona Guardada');
            console.log(data);
          } ,
          (error) => {
            console.log(error) ;
            alert('Ocurrio un error') ;
          }
        ) ;
      }
    }else{
      alert('Complete los campos')
    }
  }

  backPage(){
    this.location.back();
  }

  cargarProvincias(e) {
    this.direccionService.getProvincias(e).subscribe(
      (provincias : Provincia[]) => {
        this.provincias = provincias ;
      }
    ) ;
  }

  cargarLocalidades(e){
    this.direccionService.getLocalidades(e).subscribe(
      (localidades : Localidad[]) => {
        this.localidades = localidades ;
      }
    ) ;
  }



}
