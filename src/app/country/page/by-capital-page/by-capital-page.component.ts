import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ByCapitalPageComponent {

  isLoading =signal<boolean>(false)
  isError = signal<string |null >(null)
  countries =signal<Country[]>([])


service =inject(CountryService)
  obtnerValor(valor: string) {
    return this.service.serchByCapital(valor).subscribe(res=>{})
  }

}
