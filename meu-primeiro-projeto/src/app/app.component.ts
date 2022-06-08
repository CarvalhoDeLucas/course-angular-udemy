import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--
    <app-diretivas-atributos>
      <h1> Aulas de Diretivas Atributo </h1>
      <h3> Final da Aula </h3>
    </app-diretivas-atributos>
    -->
    
    <app-input [contador]="addValue"></app-input>
    <button (click)="add()"> Add </button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  public addValue: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public add(): void {
    this.addValue++;
  }

}
