 import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductService } from './products.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { CartsComponent } from './carts/carts.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
import { InvoiceComponent } from './invoice/invoice.component';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgClass } from '@angular/common';

import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  FacebookLoginProvider,
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { RegisterComponent } from './register/register.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { MaterialModule } from './common/material/material.module';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    // initializeApp,
    // getAnalytics,
    RegisterComponent,
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListProductComponent,
    ShopPageComponent,
    CartsComponent,
    InvoiceComponent,
    DetailProductComponent,

  ],
  imports: [
    NgApexchartsModule,
    MaterialModule,
    GoogleSigninButtonModule ,
    ReactiveFormsModule,
    //SocialLoginModule,
    NgClass,
    //FontAwesomeModule,
    BrowserModule,
     NgxPaginationModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,///-----
    MatFormFieldModule,
    MatDialogModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),



  ],

  providers: [CartsComponent,MatDialog,
    {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('24481437115-priccp7d5tq52vpmorhdkhksc7ekoct4.apps.googleusercontent.com'),
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider(
            '1050501362620628'
          )
        }
      ],
    } as SocialAuthServiceConfig,
  },
],
  bootstrap: [AppComponent]
})
export class AppModule {
  get schemas() {
    return [CUSTOM_ELEMENTS_SCHEMA];
  }
 }
