import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {  RestCountry } from '../interfaces/Country';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {


  public http = inject(HttpClient)


constructor() { }

serchByCapital(valor:string){
  valor = valor.toLowerCase();
 return this.http.get<RestCountry[]>(`${API_URL}/capital/${valor}`)
}

}
