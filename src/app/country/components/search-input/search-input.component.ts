import { Component, input, OnInit, output } from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  placeholder =input('buscar');
  enviarValor= output<string>()
  constructor() { }

  ngOnInit() {
  }

    onSearch(valor:string){
        this.enviarValor.emit(valor)
    }

}
