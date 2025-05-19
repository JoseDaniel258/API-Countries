import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { RestCountry } from '../../interfaces/Country';

@Component({
  selector: 'by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ByCapitalPageComponent {

  service =inject(CountryService)

  isLoading =signal<boolean>(false)
  isError = signal<string |null >(null)
  countries =signal<RestCountry[]>([])


  obtnerValor(valor: string) {
    if(this.isLoading()) return; {
      this.isLoading.set(true)
      this.isError.set(null)
      this.service.serchByCapital(valor).subscribe(res=>{
       this.isLoading.set(false),
       this.countries.set(res),
       console.log(this.countries)
      })
    }
  }

}
