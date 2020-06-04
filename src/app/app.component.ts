import { Component } from '@angular/core';

import { ReinoAnimal } from './complexObjects/ReinoAnimal';

import { AnimalesService } from './animales.service';

@Component({
  selector: 'app-animalia',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Animalia';
  animals:ReinoAnimal[] = [];
  selected_animal = "";

  ngOnInit(){
    this.getAnimales_Servicio();
  }

  constructor(private animalesService:AnimalesService){ }

  getAnimales_Servicio():void{
    this.animalesService.getListaAnimales().subscribe(listaAnimales => this.animals = listaAnimales);
  }

  eliminarAnimal(pNombre:String):void{
    this.animalesService.eliminarAnimal(pNombre);

    // solicitar nuevamente la lista, esta vez vendra sin el objeto que se elimino
    this.getAnimales_Servicio();
  }
}