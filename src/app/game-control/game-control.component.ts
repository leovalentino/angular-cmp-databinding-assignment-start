import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  numero = 0;
  vetorPares = [];
  vetorImpares = [];
  tempo: any;

  constructor() { }

  ngOnInit(): void {
  }

  iniciarJogo() {
    this.tempo = setInterval(() => {
      this.numero++;
      if (this.numero % 2 === 0) {
        this.vetorPares.push(this.numero);
      } else {
        this.vetorImpares.push(this.numero);
      }
    }, 1000);
  }

  pararJogo() {
    clearInterval(this.tempo);
  }
}
