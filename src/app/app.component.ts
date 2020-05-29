import { Component } from '@angular/core';
import { Animal } from './simpleObjects/animal';
import { Mamifero } from './complexObjects/Mamifero';
import { ReinoAnimal } from './complexObjects/ReinoAnimal';

@Component({
  selector: 'app-animalia',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Animalia';
  animals =[{}];
  selected_animal ="";
  bProgramaSimple = true;
  
  constructor(){
      this.actualizar_lista();
  }

  actualizar_lista(){
    this.animals=[{}];

    if(this.bProgramaSimple){
      this.crearAnimalSimple(new Animal("Perro","Ladra", "Interno", 4), this.animals.length -1);
      this.crearAnimalSimple(new Animal("Gato","Maulla", "Interno", 4), this.animals.length );
      this.crearAnimalSimple(new Animal("Escorpion","N/a", "Externo", 8), this.animals.length );
    }else{
      this.crearMamifero(new Mamifero("Perro","ladra", "Interno", 4, "omnivoro", "en tierra"), this.animals.length -1);
      this.crearMamifero(new Mamifero("Gato","maulla", "Interno", 4, "omnivoro", "en tierra"), this.animals.length );
      this.crearMamifero(new Mamifero("Leon","ruge", "Interno", 4, "carnivoro", "en tierra"), this.animals.length );
      this.crearMamifero(new Mamifero("Ornitorrinco","grazna", "Interno", 4, "carnivoro", "en tierra y en agua"), this.animals.length );

    }
  }

  seleccion(pAnim: any){
    this.selected_animal = pAnim;
  }

  cambiarVista(){
    this.bProgramaSimple = !this.bProgramaSimple;
    this.selected_animal = "";
    this.actualizar_lista();
    this.cambiarTitulo();
  }

  cambiarTitulo(){
    this.title = this.bProgramaSimple?"Animalia simple":"Animalia compleja";
  }

  crearAnimalSimple(pAn: Animal, pCtn: any){
    this.animals[pCtn]={'nombre': pAn.nombre,
                        'sonido' : pAn.sonido,
                        'esqueleto' : pAn.tipo_esqueleto,
                        'extremidades' : pAn.cantidad_extremidades};
  }
  
  crearMamifero(pAn: ReinoAnimal, pCtn: any){
    this.animals[pCtn]={'nombre': pAn.Nombre,
                        'sonido' : pAn.Sonido,
                        'esqueleto' : pAn.TipoEsqueleto(),
                        'extremidades' : pAn.Cantidad_Extremidades,
                        'alimentacion' : pAn.Alimentacion(),
                        'movimiento': pAn.Movimiento()};
  }

  

}
