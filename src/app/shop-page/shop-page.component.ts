import { brand } from './../brand';
import { ProductService } from './../products.service';
import { Component } from '@angular/core';

import { PostService } from '../post.service';
import { products } from './../products';
import { OnInit, EventEmitter, Output, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Catagories } from '../catagories';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, filter, reduce, switchMap
} from 'rxjs/operators';
@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent {
    //c : Cart [] = [];
//   Title = [
//     { h2 : 'Shop Detail' },
//     { t1 :  'Pages' },
//     { t2 :'Shop Details' },
// ];


h2 : string = 'Shop Page'
t1 : string = 'Home'
t2 : string = 'Pages'
t3 : string = 'Shop Pages'
  find !: string;
  binding !: number;
  Products2: products[] = [];
   filterproduct:  products[] = [];
   brand: brand[] = [];
  catagories: Catagories[] = [];
  products$!: Observable<products[]>;
  quantity: number = 0;
  quantityss = {};
  @Input() POSTS2:products[] = []
  private searchTerms = new Subject<string>();
  constructor(private ProductService: ProductService,private postService: PostService){

    this.fetchPosts1();
  }
ngOnChanges(changes: SimpleChanges): void {

}
ngOnInit(): void {



  this.getProduct1();
  this.getCatagories();
 this.getpdbyname;
 this.getBrands();
 this.products$ = this.ProductService.getProduct();


}
 getProduct1() {
  this.ProductService.getProduct()
  .subscribe(products => {
    console.log('product: ',products);
    this.Products2 = products.sort((a, b) =>  a.id - b.id );
    console.log('product2: ',this.Products2);
    this.filterproduct = this.Products2;
  }
);
  // console.log('aresult: ',aresult);
  // this.Products2 = aresult.sort((a, b) =>  a.id - b.id );

 }

 getCatagories(): void{
  this.ProductService.getcatagories()
  .subscribe(products => this.catagories = products.sort((a, b) =>  b.id - a.id ));
 }

 getBrands(): void{
  this.ProductService.getBrand()
  .subscribe(products => this.brand = products.sort((a, b) =>  b.id - a.id ));
 }
 getpdbyname(term: string):void {

    this.searchTerms.next(term);

    this.filterproduct = this.Products2.filter((item) => item.catagories.includes(term));


  }
  getpdbybrand(term: string):void {

    this.searchTerms.next(term);

    this.filterproduct = this.Products2.filter((item) => item.brands.includes(term));


  }
Find():void{
  this.searchTerms.next(this.find);
  this.filterproduct = this.Products2.filter((item) => {
    const lowerCaseTerm = this.find.toLowerCase().trim();;
    const lowerCaseBrand = item.catagories.toLowerCase().trim();;
    return lowerCaseBrand.includes(lowerCaseTerm);
  });
  console.log('find shop: ',this.find);
}


 add_click(i : any) {
//   this.Products[i].quantity= this.Products[i].quantity+1;
//   if (this.Products) {
//    let total_price = 0;
//     for (let i = 0; i < this.Products.length; i++) {
//       total_price += this.Products[i]['quantity'] * this.Products[i]['price'];
//     }
//   }
// if (!this.quantity[productId]) {
//   this.quantity[productId] = 1;
//   } else {
//   this.quantity[productId]++;
//   }


  }





  //phan trang
  POSTS1:products[] = [];
  page1: number = 1;
  count1: number = 0;
  tableSize1: number = 16;
  tableSizes1: any = [3, 6, 9, 12];
  fetchPosts1(): void {
    this.postService.getAllPosts().subscribe(
      (response) => {
        this.POSTS1 = response;
        this.POSTS2 = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onTableDataChange1(event: any) {
    console.log('event: ',event)
    this.page1 = event;
    this.fetchPosts1();
  }
  onTableSizeChange1(event: any): void {
    this.tableSize1 = event.target.value;
    this.page1 = 1;
    this.fetchPosts1();
  }

}
