import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country-page',
  imports: [],
  templateUrl: './by-country-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryPageComponent {

  service = inject(CountryService)


}
