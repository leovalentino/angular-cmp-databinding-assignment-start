import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numero = 0;
  vetorPares = [];
  vetorImpares = [];
  tempo: any;

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

}
