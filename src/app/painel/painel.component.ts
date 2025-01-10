import { Component } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  standalone: false,
  
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css'
})
export class PainelComponent  {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a Frase: '
  public resposta: string = ''

  constructor() {  console.log(this.frases) }


  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    console.log(this.resposta)
  }

}
