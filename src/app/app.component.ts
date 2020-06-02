import { Component } from '@angular/core';
import { Animal } from './simpleObjects/Animal';

import { Mamifero } from './complexObjects/Mamifero';
import { Ave } from './complexObjects/Ave';
import { Anfibio } from './complexObjects/Anfibio';
import { Pez } from './complexObjects/Pez';
import { Reptil } from './complexObjects/Reptil';
import { Artropodo } from './complexObjects/Artropodo';
import { Molusco } from './complexObjects/Molusco';
import { Gusano } from './complexObjects/Gusanos';
import { Equinodermos } from './complexObjects/Equinodermos';
import { Medusa } from './complexObjects/Medusa';
import { Esponjas } from './complexObjects/Esponjas';

import { ReinoAnimal } from './complexObjects/ReinoAnimal';

@Component({
  selector: 'app-animalia',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Animalia';
  animals = [];
  selected_animal ="";
  bProgramaSimple = true;

  // variables del formulario
  tipo_animal = "";
  nombre = "";
  sonido = "";
  cantidad_extremidades = 0;
  esqueleto = "";
  tipo_alimentacion = "";
  tipo_movimiento = "";

  constructor(){
      this.actualizar_lista();
  }

  actualizar_lista(){
    this.animals = [];

    if(this.bProgramaSimple){
      this.crearAnimalSimple(new Animal("Perro","Ladra", "Interno", 4));
      this.crearAnimalSimple(new Animal("Gato","Maulla", "Interno", 4));
      this.crearAnimalSimple(new Animal("Escorpion","N/a", "Externo", 8));
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

  crearAnimalSimple(pAn: Animal){
    this.animals.push({'nombre': pAn.nombre,
                        'sonido' : pAn.sonido,
                        'esqueleto' : pAn.tipo_esqueleto,
                        'extremidades' : pAn.cantidad_extremidades});
  }

  crearMamifero(pAn: ReinoAnimal){
    this.animals.push({'nombre': pAn.Nombre,
                        'sonido' : pAn.Sonido,
                        'esqueleto' : pAn.TipoEsqueleto(),
                        'extremidades' : pAn.Cantidad_Extremidades,
                        'alimentacion' : pAn.Alimentacion(),
                        'movimiento': pAn.Movimiento()
      });
  }

  crearAve(pAn: Ave){
    this.animals.push({'nombre': pAn.Nombre,
                        'sonido' : pAn.Sonido,
                        'esqueleto' : pAn.TipoEsqueleto(),
                        'extremidades' : pAn.Cantidad_Extremidades,
                        'alimentacion' : pAn.Alimentacion(),
                        'movimiento': pAn.Movimiento()
      });
  }

  crearAnfibio(pAn: Anfibio){
    this.animals.push({'nombre': pAn.Nombre,
                        'sonido' : pAn.Sonido,
                        'esqueleto' : pAn.TipoEsqueleto(),
                        'extremidades' : pAn.Cantidad_Extremidades,
                        'alimentacion' : pAn.Alimentacion(),
                        'movimiento': pAn.Movimiento()
    });
  }

  crearPez(pAn: Pez){
    this.animals.push({'nombre': pAn.Nombre,
                        'sonido' : pAn.Sonido,
                        'esqueleto' : pAn.TipoEsqueleto(),
                        'extremidades' : pAn.Cantidad_Extremidades,
                        'alimentacion' : pAn.Alimentacion(),
                        'movimiento': pAn.Movimiento()
    });
  }

  crearReptil(pAn: Reptil){
    this.animals.push({'nombre': pAn.Nombre,
                        'sonido' : pAn.Sonido,
                        'esqueleto' : pAn.TipoEsqueleto(),
                        'extremidades' : pAn.Cantidad_Extremidades,
                        'alimentacion' : pAn.Alimentacion(),
                        'movimiento': pAn.Movimiento()
      });
  }

	crearArtropodo(pAn: Artropodo){
		this.animals.push({
			'nombre': pAn.Nombre,
			'sonido' : pAn.Sonido,
            'esqueleto' : pAn.TipoEsqueleto(),
            'extremidades' : pAn.Cantidad_Extremidades,
            'alimentacion' : pAn.Alimentacion(),
            'movimiento': pAn.Movimiento()
		});
	}

	crearMolusco(pAn: Molusco){
		this.animals.push({
			'nombre': pAn.Nombre,
			'sonido' : pAn.Sonido,
            'esqueleto' : pAn.TipoEsqueleto(),
            'extremidades' : pAn.Cantidad_Extremidades,
            'alimentacion' : pAn.Alimentacion(),
            'movimiento': pAn.Movimiento()
		});
  }
  
  crearGusano(pAn: Gusano){
		this.animals.push({
			'nombre': pAn.Nombre,
			'sonido' : pAn.Sonido,
            'esqueleto' : pAn.TipoEsqueleto(),
            'extremidades' : pAn.Cantidad_Extremidades,
            'alimentacion' : pAn.Alimentacion(),
            'movimiento': pAn.Movimiento()
		});
  }
  
  crearEquinodermo(pAn: Equinodermos){
		this.animals.push({
			'nombre': pAn.Nombre,
			'sonido' : pAn.Sonido,
            'esqueleto' : pAn.TipoEsqueleto(),
            'extremidades' : pAn.Cantidad_Extremidades,
            'alimentacion' : pAn.Alimentacion(),
            'movimiento': pAn.Movimiento()
		});
  }
  
  crearMedusa(pAn: Medusa){
		this.animals.push({
			'nombre': pAn.Nombre,
			'sonido' : pAn.Sonido,
            'esqueleto' : pAn.TipoEsqueleto(),
            'extremidades' : pAn.Cantidad_Extremidades,
            'alimentacion' : pAn.Alimentacion(),
            'movimiento': pAn.Movimiento()
		});
  }
  
  crearEsponja(pAn: Esponjas){
		this.animals.push({
			'nombre': pAn.Nombre,
			'sonido' : pAn.Sonido,
            'esqueleto' : pAn.TipoEsqueleto(),
            'extremidades' : pAn.Cantidad_Extremidades,
            'alimentacion' : pAn.Alimentacion(),
            'movimiento': pAn.Movimiento()
		});
	}



  registrarTipoAnimal(valor:any){
    this.tipo_animal = valor;
  }

  actualizarValor(prop:any, valor:any){
    this[prop] = valor;
  }

  limpiarFormulario(){
    this.tipo_animal = "";
    this.nombre = "";
    this.sonido = "";
    this.cantidad_extremidades = 0;
    this.esqueleto = "";
    this.tipo_alimentacion = "";
    this.tipo_movimiento = "";
  }

  crearObjetoAnimal(nombre:any, cantidad_extremidades:any, sonido:any, esqueleto:any, tipo_alimentacion:any, tipo_movimiento:any){
    if(this.tipo_animal === ""){
      alert('Por favor seleccione el tipo de animal que desea registrar');
    }else{
      switch(this.tipo_animal){
        case "mamifero":
          this.crearMamifero(new Mamifero(nombre, sonido, esqueleto, cantidad_extremidades, tipo_alimentacion, tipo_movimiento));
          break;

        case "ave":
          this.crearAve(new Ave(nombre, sonido, esqueleto, cantidad_extremidades, tipo_alimentacion, tipo_movimiento));
          break;

        case "anfibio":
          this.crearAnfibio(new Anfibio(nombre, sonido, esqueleto, cantidad_extremidades, tipo_alimentacion, tipo_movimiento));
          break;

        case "pez":
          this.crearPez(new Pez(nombre, sonido, esqueleto, cantidad_extremidades, tipo_alimentacion, tipo_movimiento));
          break;

        case "reptil":
          this.crearReptil(new Reptil(nombre, sonido, esqueleto, cantidad_extremidades, tipo_alimentacion, tipo_movimiento));
          break;

        case "antropodo":
          this.crearArtropodo(new Artropodo(nombre, sonido, esqueleto, cantidad_extremidades, tipo_alimentacion, tipo_movimiento));
          break;

        case "molusco":
          this.crearMolusco(new Molusco(nombre, sonido, esqueleto, cantidad_extremidades, tipo_alimentacion, tipo_movimiento));
          break;

        case "gusano":
          this.crearGusano(new Gusano(nombre, sonido, esqueleto, cantidad_extremidades, tipo_alimentacion, tipo_movimiento));
          break;

        case "equinodermos":
          this.crearEquinodermo(new Equinodermos(nombre, sonido, esqueleto, cantidad_extremidades, tipo_alimentacion, tipo_movimiento));
          break;

        case "medusas":
          this.crearMedusa(new Medusa(nombre, sonido, esqueleto, cantidad_extremidades, tipo_alimentacion, tipo_movimiento));
          break;

        case "esponjas":
          this.crearEsponja(new Esponjas(nombre, sonido, esqueleto, cantidad_extremidades, tipo_alimentacion, tipo_movimiento));
          break;

        default:
          this.crearAnimalSimple(new Animal(nombre, sonido, esqueleto, cantidad_extremidades));
          break;

      }

      this.limpiarFormulario();
    }
  }
}