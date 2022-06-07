import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome: string = 'Lucas';
  public idade: number = 21;
  public maisUm: number = 1;

  public checed: boolean = true;
  public imgSrc: string = 'https://upload.wikimedia.org/wikipedia/pt/3/3d/Twitter_logo_2012.svg';
  public imgTitle: string = 'Property Binding';

  public position: { x: number, y: number } = { x: 0, y: 0 };

  constructor() { }

  ngOnInit(): void {
  }

  public alertaInfo(valor: MouseEvent) {
    console.log(valor);
  }

  public mouseMuve(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
