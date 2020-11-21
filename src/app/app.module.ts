import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoComponent } from './curso.component';
import { Prueba1Component } from './prueba1/prueba1.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SidebarModule } from 'ng-sidebar';

const rutas: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'registro',
    component: FormComponent
  },
  {
    path: 'login',
    component: Prueba1Component
  },
  {
    path: 'registro/:id',
    component: FormComponent
  },

]

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    Prueba1Component,
    HomeComponent,
    FormComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rutas),
    HttpClientModule ,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    SidebarModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
