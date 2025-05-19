import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RestCountry } from '../../interfaces/Country';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './country-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryListComponent {
  countries = input.required<RestCountry[]>()


}



