import { Component, inject } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-pais-page',
  templateUrl: './by-pais-page.component.html',
  imports: [SearchInputComponent, CountryListComponent]
})
export class ByPaisPageComponent  {

  service = inject(CountryService)

  constructor() { }

searchByCapital(){
  this.service.serchByCapital("tallinn").subscribe(res => {console.log(res)})
}
}
