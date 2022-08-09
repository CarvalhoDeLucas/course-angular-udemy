import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teste-unitario';

  public soma(val1: number, val2: number) {
    return val1+val2;
  }
}
