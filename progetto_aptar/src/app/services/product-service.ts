import { Injectable, ɵinternalProvideZoneChangeDetection } from '@angular/core';
import {Prodotto} from '../classes/prodotto';
import { Data } from '../classes/data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(){}

  async Lista(): Promise<Prodotto[]> {
    let risultato : Data = await(await fetch("http://localhost:3000/prodotti")).json()
    if(Array.isArray(risultato.data))
      return risultato.data;
    
    else
      console.log(risultato.data);

    return [];
  }

  // async Dettaglio(varCodice : number): Promise<Prodotto | null>{
  //   try{
  //     const response = await fetch(`http://localhost:3000/prodotti/${varCodice}`);
  //     if(!response.ok){
  //       console.log(`Errore HTTP: ${response.status}`);
  //       return null;
  //     }
  //     const risultato : Data =  await response.json();
  //     if(risultato.status === "SUCCSESS"){

  //     }
  //   }
  //   catch (error){
  //     console.log(`errore: ${error}`)
  //   }
  //   return null;

  // }
   
}
