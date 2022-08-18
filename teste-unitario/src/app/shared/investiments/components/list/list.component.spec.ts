import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Investiments } from '../../model/investiments';
import { MOCK_LIST } from '../../services/list-investiments.mock';
import { ListInvestimentsService } from '../../services/list-investiments.service';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  let service: ListInvestimentsService;

  const mockList: Array<Investiments> = MOCK_LIST;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    service = TestBed.inject(ListInvestimentsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) should list investiments', () => {
    //Ele fia espionando o método
    spyOn(service, 'list').and.returnValue(of(mockList));

    component.ngOnInit();
    fixture.detectChanges();

    expect(service.list).toHaveBeenCalledWith();
    expect(component.investiments.length).toBe(5);
    
    expect(component.investiments[0].name).toEqual('Banco 1');
    expect(component.investiments[0].value).toBe(100);
    expect(component.investiments[4].name).toEqual('Banco 5');
    expect(component.investiments[4].value).toBe(100);
  });

  it('(I) should list investiments', () => {
    let investiments = fixture.debugElement.nativeElement.querySelectorAll('.list-itens');

    expect(investiments.length).toBe(4);
    expect(investiments[0].textContent.trim()).toEqual('Itaú / 100');
  });
});
