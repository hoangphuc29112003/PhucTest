
import { products } from './../products';
import { Component,Input, OnInit } from '@angular/core';
import { ProductService } from '../products.service'
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart-service';
import { Cart } from '../cart';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent {
  //c : Cart [] = [];
//   Title = [
//     { h2 : 'Shop Detail' },
//     { t1 :  'Pages' },
//     { t2 :'Shop Details' },
// ];
//button
css = [
  {
    text : 'Mua Hàng',
    width: '200px',
    height: '40px',
    color : 'white',
    bgcolor : 'black',
    colorhover: 'white',
    bgcolorhover : 'rgb(242, 80, 80)',

  },

];

  h2 : string = 'Shop Detail'
  t1 : string = 'Home'
  t2 : string = 'Pages'
  t3 : string = 'Shop Details'
  Products: products[] = [];
   getid !: string ;
   num !: number;

  constructor(private ProductService: ProductService,private route: ActivatedRoute,private cartservice: CartService){
    console.log('lazzyyy loadddd')
}
isActive = false;
ngOnInit(): void {

  this.getProduct();
  this.route.paramMap.subscribe(params => {
    this.getid = params.get('item.id') || '';
   console.log('id :',this.getid)
    console.log('id :',this.Products)
 });
 this.num = parseInt(this.getid);
}
getProduct(): void {
  this.ProductService.getProduct()
  .subscribe(products => this.Products = products.sort((a, b) =>  b.id - a.id ));
}
addtocart(item : products ){
  this.cartservice.addToCart(item);
  console.log('lay cart: ',this.cartservice.getItems());

}

}
