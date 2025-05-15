import { Routes } from "@angular/router";
import { CountryLayoutComponent } from "./layouts/country-layout/country-layout.component";
import ByCapitalPageComponent from './page/by-capital-page/by-capital-page.component';
import { ByPaisPageComponent } from "./page/by-pais-page/by-pais-page.component";
import { ByRegionPageComponent } from "./page/by-region-page/by-region-page.component";
import { ByCountryPageComponent } from "./page/by-country-page/by-country-page.component";

export const  Countrroutes:Routes = [
 {
  path:'',
  component:CountryLayoutComponent,
  children:[
    {
      path:'by-capital',
      component:ByCapitalPageComponent,
    },
      {
      path:'by-pais',
      component:ByPaisPageComponent,
    },
      {
      path:'by-region',
      component:ByRegionPageComponent,
    },
     {
      path:'country/:SRI',
      component:ByCountryPageComponent,
    },
    {
      path:'**',
      redirectTo:'by-capital'
     }
  ]
 },


// {
//   path:'by-capital',
//   loadComponent : () => import('./page/by-capital-page/by-capital-page.component')
//  },


]



