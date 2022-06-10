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
    
    <!--
    <app-input [contador]="addValue"></app-input>
    <button (click)="add()"> Add </button>
    -->

    <!--
    <ng-template [ngIf]="getDados">
      <h1>{{getDados.nome}}</h1>
      <h2>{{getDados.idade}}</h2>
    </ng-template>

    <app-output (enviarDados)="setDados($event)"></app-output>
    -->

    <app-food-list></app-food-list>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  public addValue: number = 0;

  public getDados: { nome: string, idade: number } | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  public add(): void {
    this.addValue++;
  }

  public setDados(event: { nome: string, idade: number }) {
    this.getDados = event;
  }

}
