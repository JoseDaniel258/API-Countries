import { ChangeDetectionStrategy, Component, inject, input, resource, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { CountryIn } from '../../interfaces/CountryIn';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ByCapitalPageComponent {

  service = inject(CountryService)
 query = signal('')
  countryResolce = resource({
    request : () =>({query: this.query()}),
    loader : async({ request}) =>{
      if( !this.query()) return [];
         return await firstValueFrom(
          this.service.serchByCapital(request.query)
      )
    }
  })

  // isLoading = signal<boolean>(false)
  // isError = signal<string | null>(null)
  // countries = signal<CountryIn[]>([])


  // obtnerValor(query: string) {
  //   if (this.isLoading()) return; {
  //     this.isLoading.set(true)
  //     this.isError.set(null)
  //     this.service.serchByCapital(query)
  //       .subscribe({
  //         //este next es el que se ejecuta cuando la peticion es correcta y funciona como un then una promesa
  //         next: (countries) => {

  //           this.isLoading.set(false);
  //           this.countries.set(countries);

  //         },
  //         error: (error) => {
  //           this.isLoading.set(true),
  //             this.countries.set([]),
  //             this.isError.set(`Pais no encontrado con esa capital:${error}`)
  //           console.log(this.isError())
  //         },
  //       })
  //   }
  // }

}
