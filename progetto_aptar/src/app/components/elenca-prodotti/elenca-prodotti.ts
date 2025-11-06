import { Component } from '@angular/core';
import { Prodotto } from '../../classes/prodotto';
import { ProductService } from '../../services/product-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-elenca-prodotti',
  imports: [CommonModule],
  templateUrl: './elenca-prodotti.html',
  styleUrl: './elenca-prodotti.css',
})
export class ElencaProdotti {

  elenco: Prodotto[] = new Array();

  constructor(private service: ProductService){
  }
  ngOnInit(){
    this.service.Lista().then(ris =>{
      this.elenco = ris;
    });
  }
}
