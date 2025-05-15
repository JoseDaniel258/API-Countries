import { Component, OnInit } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";

@Component({
  selector: 'app-by-pais-page',
  templateUrl: './by-pais-page.component.html',
  styleUrls: ['./by-pais-page.component.css'],
  imports: [SearchInputComponent, CountryListComponent]
})
export class ByPaisPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
