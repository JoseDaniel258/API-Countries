import { Component, inject } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-pais-page',
  templateUrl: './by-pais-page.component.html',
  imports: [SearchInputComponent]
})
export class ByPaisPageComponent  {

  service = inject(CountryService)

  constructor() { }


}
