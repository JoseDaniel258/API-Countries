import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { TopMenuComponent } from "../../components/top-menu/top-menu.component";

@Component({
  imports: [RouterOutlet, TopMenuComponent  ],
  selector: 'country-layout',
  templateUrl: './country-layout.component.html',
  styleUrls: ['./country-layout.component.css']
})
export class CountryLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
