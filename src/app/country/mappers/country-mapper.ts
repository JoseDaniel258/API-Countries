import { RestCountry } from './../interfaces/Country';
import { CountryIn } from '../interfaces/CountryIn';

export class CountryMapper {
  static mapRestCountryToCountry(resCountry:RestCountry):CountryIn{
    return {
      capital: resCountry.capital?.join(' ,') ?? '',
      cca2:resCountry.cca2,
      flag:resCountry.flag,
      flagSvg:resCountry.flags.svg,
      name:resCountry.translations['spa']?.common ?? 'no espanish name',
      population:resCountry.population
    }
  }

  static mapRestCountryArrayToCountryArray( resCountries:RestCountry[]):CountryIn[]{
     return resCountries.map( country => CountryMapper.mapRestCountryToCountry(country))
  }
}
