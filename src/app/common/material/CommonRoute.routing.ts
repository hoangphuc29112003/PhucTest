import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductComponent } from '../../detail-product/detail-product.component';
// import { ListProductComponent } from './list-product/list-product.component';
import { HomeComponent } from '../../home/home.component';
import { ShopPageComponent } from '../../shop-page/shop-page.component';
import { ListProductComponent } from '../../list-product/list-product.component';
import { CartsComponent } from '../../carts/carts.component';
import { InvoiceComponent } from '../../invoice/invoice.component';
import { RegisterComponent } from '../../register/register.component';
import { MaterialModule } from './material.module';

const routes: Routes = [
{path: '', redirectTo: '/home', pathMatch: 'full'  },
// {path: 'listproduct', component: ListProductComponent  },
// {path: 'detail/:item.id', component: DetailProductComponent  },
{path: 'shop', component: ShopPageComponent,
children: [

  {
   path: '', component: ListProductComponent,
  },


 ] },
 {
  path: 'cart', component: CartsComponent,

 },
 {
  path: 'register', component: RegisterComponent,

 },
 {
 path: 'invoice', component: InvoiceComponent,
 },
{path: 'home', component: HomeComponent,
 children: [

 {
  path: '', component: ListProductComponent,
 }

]


},
//  {
//   path: 'detail/:item.id', loadChildren: () => import ('./gm-settings.module').then(x => x.GmSettingsModule),
//  },
//  {
//   path: 'shop', loadChildren: () => import ('./gm-settings.module').then(x => x.GmSettingsModule),
//  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class CommonRouteRoutes{};
