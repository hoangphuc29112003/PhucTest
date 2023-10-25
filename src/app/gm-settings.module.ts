
import { RouterModule, Routes } from "@angular/router";
import { DetailProductComponent } from "./detail-product/detail-product.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
//import { ListProductComponent } from './list-product/list-product.component';

export const routes: Routes = [
  {
    path: '',
    component:  DetailProductComponent,
    children: [


    ]
  },
  // {
  //   path:'home', component: HomeComponent
  // },
  // {
  //   path:'shop',component: ShopPageComponent
  // }

];


@NgModule({
  imports: [

    CommonModule,
    NgxPaginationModule,
    RouterModule.forChild(routes),


  ],
  declarations: [
   //DetailProductComponent,

  // ListProductComponent,


  ],

})
export class GmSettingsModule { }
