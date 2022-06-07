import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.trocarValor()
    }, 2000);
  }

  public trocarValor() {
    this.valor = !this.valor;
  }

}
