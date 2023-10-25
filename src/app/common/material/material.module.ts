import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { AppModule } from 'src/app/app.module';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommonRouteRoutes } from './CommonRoute.routing';
import { CartHomeComponent } from './cart-home/cart-home.component';
import { HeaderTitleComponent } from './header-title/header-title.component';
import { ButtonComponent } from './button/button.component';
import { BtnDirectiveDirective } from './Derectives/btn-directive.directive';
import { CartShopComponent } from './cart-shop/cart-shop.component';
import { FormsModule } from '@angular/forms';
import { ProductCatagoriesComponent } from './product-catagories/product-catagories.component';
import { ProductColorComponent } from './product-color/product-color.component';
import { ProductTagsComponent } from './product-tags/product-tags.component';
import { SliderHomeComponent } from './slider-home/slider-home.component';
import { SliderTextHomeComponent } from './slider-text-home/slider-text-home.component';
import { CardsSliderComponent } from './cards-slider/cards-slider.component';
import { InputComponent } from './input/input.component';
import { InnerboxComponent } from './innerbox/innerbox.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CartHomeComponent,
    HeaderTitleComponent,
    ButtonComponent,
    BtnDirectiveDirective,
    CartShopComponent,
    ProductCatagoriesComponent,
    ProductColorComponent,
    ProductTagsComponent,
    SliderHomeComponent,
    SliderTextHomeComponent,
    CardsSliderComponent,
    InputComponent,
    InnerboxComponent,

   ],
  imports: [
    CommonRouteRoutes,
    //AppRoutingModule,
    //AppModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    CartShopComponent,
    HeaderComponent ,
    CartHomeComponent,
    FooterComponent ,//Export để sử dụng được ở Module khác
    HeaderTitleComponent,
    ButtonComponent,
    BtnDirectiveDirective,
      ProductCatagoriesComponent,
      ProductColorComponent,
      ProductTagsComponent,
      SliderHomeComponent,
      CardsSliderComponent,
      InputComponent,
      InnerboxComponent,

  ]
})
export class MaterialModule { }
