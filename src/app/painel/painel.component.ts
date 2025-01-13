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
  public rodada: number = 0
  public rodadaFrase: Frase = this.frases[0]

  public tentativas: number = 3
  
  public progresso: number = 0

  constructor() {
      this.atualizaRodada()
    }


  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta)
  }

  public verificarResposta(): void {
  
    console.log(this.tentativas)
    if(this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução está correta! ')
    
    //trocar pergunta da rodada
    this.rodada++
    
    //Progresso
    this.progresso = this.progresso + (100 / this.frases.length)
    console.log(this.progresso)

    //Atualiza o objeto rodadaFrase
    this.atualizaRodada()

    } else {
      // Diminuir a variavel tentativas
      this.tentativas--

      if(this.tentativas === -1) {
        alert('Você perdeu todas as tentativas!')
      }
    }

    console.log(this.tentativas)
  }

    public atualizaRodada(): void {
      //define a frase da rodada com base em alguma logica
      this.rodadaFrase = this.frases[this.rodada]
      // Limpa a resposta
      this.resposta = ''
    }
}
