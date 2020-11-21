import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styles: [`
  //   .btn{
  //     background: green ;
  //   }
  // `]
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public _opened: boolean = false;

  public _toggleSidebar() {
    this._opened = !this._opened;
  }
  saludo = 'probando angular...' ;


  valor = 'javilon' ;


  getNombre() {
    return this.valor ;
  }

  imageURL = "http://lorempixel.com/400/200" ;

  buttonStatus = true ;

  isActive = true ;

  save(e){
    console.log(e) ;
    if(this.isActive){

      this.isActive = false ;
    }else{
      this.isActive = true ;
    }
  }

  presion(user) {

    console.log(user)

  }

  persona = {
    nombre: 'Luis',
    edad: 20 ,
  }
}
