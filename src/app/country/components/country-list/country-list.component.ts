import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RestCountry } from '../../interfaces/Country';
import { CountryIn } from '../../interfaces/CountryIn';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-list',
  imports: [
    DecimalPipe
  ],
  templateUrl: './country-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryListComponent {
  countries = input.required<CountryIn[]>()


}



