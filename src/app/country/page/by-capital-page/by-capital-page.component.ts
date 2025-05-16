import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ByCapitalPageComponent {

  countriService = inject(CountryService)
  dato = signal<string>('')

  obtnerValor(valor: string) {
     this.dato.set(valor)
    console.log(this.dato)
  }
}
