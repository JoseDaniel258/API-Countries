import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RestCountry } from '../interfaces/Country';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { CountryMapper } from '../mappers/country-mapper';
import { CountryIn } from '../interfaces/CountryIn';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {


  public http = inject(HttpClient)


  constructor() { }
  //Nose retornaba un void el observable ahora nos retornara un RestCountry[]
  //El observable nos retornara un RestCountry[] y no un void
  serchByCapital(valor: string): Observable<CountryIn[]> {
    valor = valor.toLowerCase();
    return this.http.get<RestCountry[]>(`${API_URL}/capital/${valor}`).pipe(
      map(res => CountryMapper.mapRestCountryArrayToCountryArray(res)),
      tap(res => console.log("Respuesta de la API:", res)), // 👀 Verifica la respuesta CRUDA

      catchError(error => {
         console.log(error) ;
        return throwError(() => new Error('Error en la peticion')) // 👀 Verifica el error CRUDO

       })


    );

  }

}
