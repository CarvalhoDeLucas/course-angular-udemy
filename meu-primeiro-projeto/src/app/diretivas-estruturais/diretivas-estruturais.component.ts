import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{ nome: string, idade: number }> = [
    { nome: 'Lucas', idade: 20 },
    { nome: 'Eduardo', idade: 21 },
    { nome: 'Carvalho', idade: 22 }
  ];

  public nome: string = 'Lucas';

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      this.condition = !this.condition
    }, 2000);

  }

  public onClick() {
    this.conditionClick = !this.conditionClick;
  }

  public onClickAddList() {
    this.list.push({ nome: 'Teste', idade: 55 });
  }

  public onClickEventList(event: number) {
    this.list.splice(event, 1);
  }

}
