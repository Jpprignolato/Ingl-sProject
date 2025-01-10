import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  standalone: false,
  
  templateUrl: './progresso.component.html',
  styleUrl: './progresso.component.css'
})
export class ProgressoComponent {
  @Input() progresso: number = 0;

}
