import { Component, OnInit } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css'],
  imports: [SearchInputComponent]
})
export class ByRegionPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
