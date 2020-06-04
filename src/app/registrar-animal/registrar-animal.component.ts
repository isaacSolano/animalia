import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ReinoAnimal } from '../complexObjects/ReinoAnimal';

import { Mamifero } from '../complexObjects/Mamifero';
import { Ave } from '../complexObjects/Ave';
import { Anfibio } from '../complexObjects/Anfibio';
import { Pez } from '../complexObjects/Pez';
import { Reptil } from '../complexObjects/Reptil';
import { Artropodo } from '../complexObjects/Artropodo';
import { Molusco } from '../complexObjects/Molusco';
import { Gusano } from '../complexObjects/Gusanos';
import { Equinodermos } from '../complexObjects/Equinodermos';
import { Medusa } from '../complexObjects/Medusa';
import { Esponjas } from '../complexObjects/Esponjas';

import { AnimalesService } from '../animales.service';

import { VTaxonomia } from '../complexObjects/Vertebrado';
import { ITaxonomia } from '../complexObjects/Invertebrados';

@Component({
  selector: 'app-registrar-animal',
  templateUrl: './registrar-animal.component.html',
  styleUrls: ['./registrar-animal.component.scss']
})

export class RegistrarAnimalComponent implements OnInit {
  public taxonomiaOptions = [];
  public seleccionadoTaxonomia:String = "";
  public seleccionadoCategoria:String = "Vertebrado";

  constructor(private animalesService:AnimalesService, private router:Router) { }

  ngOnInit(): void {
    this.cargarTaxonomia(this.seleccionadoCategoria);
  }

  cargarTaxonomia(pSeleccion:String){
    let mTaxonomia = [];

    switch(pSeleccion){
      case "Vertebrado":
        mTaxonomia = Object.keys(VTaxonomia).filter(key => typeof VTaxonomia[key as any] === "number");
        break;

      case "Invertebrado":
        mTaxonomia = Object.keys(ITaxonomia).filter(key => typeof ITaxonomia[key as any] === "number");
        break;

      default:
        // code block
        break;
    }

    this.setListaTaxonomia(mTaxonomia);
  }

  setListaTaxonomia(pKey:any){
    this.taxonomiaOptions = [];
    var self = this;

    pKey.forEach( (val) => {
      val = self.capitalize( val.toLowerCase() );

      self.taxonomiaOptions.push({ "option": val, "value": val });
    });

    this.seleccionadoTaxonomia = this.taxonomiaOptions[0].option;
  }

  capitalize(val:String):String{
    return val.substr(0,1).toUpperCase().concat( val.substr(1, val.length) );
  }

  crearAnimal(form:NgForm){
    let newAnimal:ReinoAnimal = this.getNewAnimal(form);

    this.animalesService.addAnimal(newAnimal);
    this.router.navigate(['/']);
  }

  getNewAnimal(form:NgForm):ReinoAnimal{
    let atrAnimal = form.value,
      mEsqueleto = atrAnimal.sbCaracteristica == "Vertebrado" ? "Interno" : "Externo",
      newAnimal:ReinoAnimal;

    switch(atrAnimal.mTaxonomy){
      case "ANFIBIOS":
        newAnimal = new Anfibio(atrAnimal.txtNombre, atrAnimal.txtSonido, mEsqueleto, atrAnimal.txtExtremidades, atrAnimal.txtAlimentacion, atrAnimal.txtMovimiento);
        break;

      case "ARTROPODOS":
        newAnimal = new Artropodo(atrAnimal.txtNombre, atrAnimal.txtSonido, mEsqueleto, atrAnimal.txtExtremidades, atrAnimal.txtAlimentacion, atrAnimal.txtMovimiento);
        break;

      case "AVES":
        newAnimal = new Ave(atrAnimal.txtNombre, atrAnimal.txtSonido, mEsqueleto, atrAnimal.txtExtremidades, atrAnimal.txtAlimentacion, atrAnimal.txtMovimiento);
        break;

      case "EQUINODERMOS":
        newAnimal = new Equinodermos(atrAnimal.txtNombre, atrAnimal.txtSonido, mEsqueleto, atrAnimal.txtExtremidades, atrAnimal.txtAlimentacion, atrAnimal.txtMovimiento);
        break;

      case "ESPONJAS":
        newAnimal = new Esponjas(atrAnimal.txtNombre, atrAnimal.txtSonido, mEsqueleto, atrAnimal.txtExtremidades, atrAnimal.txtAlimentacion, atrAnimal.txtMovimiento);
        break;
        
      case "GUSANOS":
        newAnimal = new Gusano(atrAnimal.txtNombre, atrAnimal.txtSonido, mEsqueleto, atrAnimal.txtExtremidades, atrAnimal.txtAlimentacion, atrAnimal.txtMovimiento);
        break;

      case "MAMIFEROS":
        newAnimal = new Mamifero(atrAnimal.txtNombre, atrAnimal.txtSonido, mEsqueleto, atrAnimal.txtExtremidades, atrAnimal.txtAlimentacion, atrAnimal.txtMovimiento);
        break;

      case "MEDUSAS":
        newAnimal = new Medusa(atrAnimal.txtNombre, atrAnimal.txtSonido, mEsqueleto, atrAnimal.txtExtremidades, atrAnimal.txtAlimentacion, atrAnimal.txtMovimiento);
        break;
        
      case "MOLUSCOS":
        newAnimal = new Molusco(atrAnimal.txtNombre, atrAnimal.txtSonido, mEsqueleto, atrAnimal.txtExtremidades, atrAnimal.txtAlimentacion, atrAnimal.txtMovimiento);
        break;

      case "PECES":
      newAnimal = new Pez(atrAnimal.txtNombre, atrAnimal.txtSonido, mEsqueleto, atrAnimal.txtExtremidades, atrAnimal.txtAlimentacion, atrAnimal.txtMovimiento);
      break;
      
      case "REPTILES":
        newAnimal = new Reptil(atrAnimal.txtNombre, atrAnimal.txtSonido, mEsqueleto, atrAnimal.txtExtremidades, atrAnimal.txtAlimentacion, atrAnimal.txtMovimiento);
        break;

    }

    return newAnimal;
  }
}