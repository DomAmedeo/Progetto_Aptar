import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dettaglio-prodott',
  imports: [],
  templateUrl: './dettaglio-prodott.html',
  styleUrl: './dettaglio-prodott.css',
})
export class DettaglioProdott {

  constructor(private rottaAttiva: ActivatedRoute){ }

  ngOnInit(){
    this.rottaAttiva.params.subscribe((risultato) =>{
      const codice = risultato['codice'];

      console.log(codice);
    });
  }


}
