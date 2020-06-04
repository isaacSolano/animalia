import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ReinoAnimal } from './complexObjects/ReinoAnimal';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {
  private ListaAnimales:ReinoAnimal[] = [];

  constructor() { }

  getListaAnimales(): Observable<ReinoAnimal[]>{
    return of(this.ListaAnimales);
  }

  addAnimal(pAnimal:ReinoAnimal):void{
    this.ListaAnimales.push(pAnimal);
  }

  getAnimal(pNombre:String):ReinoAnimal{
    return this.ListaAnimales.filter(item => item.Nombre === pNombre)[0];
  }

  eliminarAnimal(pNombre:String):void{
    let index = this.ListaAnimales.findIndex( ({Nombre}) => Nombre === pNombre);
            
    this.ListaAnimales = this.ListaAnimales.splice(0, index).concat( this.ListaAnimales.splice(index + 1, this.ListaAnimales.length) );
  }
}
