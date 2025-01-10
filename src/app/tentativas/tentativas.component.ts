import { Component } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  standalone: false,
  
  templateUrl: './tentativas.component.html',
  styleUrl: './tentativas.component.css'
})
export class TentativasComponent {

  public coracaoVazio: string = 'coracao_vazio.png'
  public coracaoCheio: string = 'coracao_cheio.png'

}
