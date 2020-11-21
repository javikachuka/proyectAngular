import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'prueba1',
  templateUrl: './prueba1.component.html',
  styleUrls: ['./prueba1.component.sass']
})
export class Prueba1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  miForm = new FormGroup({
    usuario : new FormControl('', Validators.required) ,
    pass : new FormControl('', Validators.required),

  }) ;
}
