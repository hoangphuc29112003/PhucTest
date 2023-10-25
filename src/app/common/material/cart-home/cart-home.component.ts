import { products } from './../../../products';
import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { CartService } from 'src/app/cart-service';
import { HomeComponent } from 'src/app/home/home.component';

@Component({
  selector: 'app-cart-home',
  templateUrl: './cart-home.component.html',
  styleUrls: ['./cart-home.component.scss']
})
export class CartHomeComponent {

  @Input() color: string = 'pink';
  s = [
    {
      text : 'Mua Hàng',
      width: '',
      height: '40px',
      color : 'white',
      bgcolor : 'black',
      colorhover: 'white',
      bgcolorhover : 'rgb(242, 80, 80)',

    },

  ];

  @Input() item: any;
  @Output() addtocard = new EventEmitter<any>();
  // addtocart(item : products ){
  //   this.cartservice.addToCart(item);
  //   console.log('lay cart: ',this.cartservice.getItems());

  // }
  addtocart(item : any):void{


    this.addtocard.emit(item);
    // console.log('lay cart: ',this.cartservice.getItems());

  }

  constructor(){
}
ngOnInit(){
// console.log('input pd',this.item)

}
}
