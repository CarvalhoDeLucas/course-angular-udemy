import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title *ngIf="destruir"></app-title>
    <br>
    <button (click)="desctruiComponent()">Destruir componente</button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  public valor: number = 1;
  public destruir: boolean = true;

  constructor() { }

  public adicionar(): number {
    return this.valor += 1;
  }

  public desctruiComponent() {
    this.destruir = false;
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log(1)
    }, 5000);
  }

}
