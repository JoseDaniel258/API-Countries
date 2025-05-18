import { Component, input, OnInit, output } from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {

  placeholder =input('buscar');
   value=output<string>();

  constructor() { }

  enviarValor(valor :string){
      this.value.emit(valor)
  }
}
