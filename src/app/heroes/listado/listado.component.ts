import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman','Ironma','Hulk','Thor'];
  heroBorrado: string = '';

  borrarHeroe(){
    this.heroBorrado = this.heroes.shift() || '';
  }

}
