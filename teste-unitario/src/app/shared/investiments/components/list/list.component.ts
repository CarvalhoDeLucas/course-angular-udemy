import { Component, OnInit } from '@angular/core';
import { Investiments } from '../../model/investiments';
import { ListInvestimentsService } from '../../services/list-investiments.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public investiments: Array<Investiments> = [
    { name: 'itaú', value: 100 },
    { name: 'nubanck', value: 100 },
    { name: 'inter', value: 100 },
    { name: 'caixa', value: 100 },
  ];

  constructor(
    private listInvestimentsService: ListInvestimentsService
  ) { }

  ngOnInit(): void {
    this.listInvestimentsService.list().subscribe(
      res => console.log(res)
    )
  }

}
