import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/cart-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cart1 !: string ;
  constructor(private cartservice: CartService,){

  }
  ngOnInit(){
    this.cartservice.castUser.subscribe(user => this.cart1 = user);
    // this.cart2 = this.cart1;
    console.log('cart lay tu cart',this.cart1)



  }
}
