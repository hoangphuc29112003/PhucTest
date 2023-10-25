
import { products } from './../products';
import { Component,OnInit, EventEmitter, Output, OnChanges, SimpleChanges, Input, ElementRef } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../products.service'
import { PostService } from '../post.service';
import { CartService } from '../cart-service';
import { Observable, Subject } from 'rxjs';
import { NgClass } from '@angular/common';
import { FirebaseApp } from 'firebase/app';

import {getFirestore, provideFirestore} from '@angular/fire/firestore'
// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';

import { AngularFireDatabase} from '@angular/fire/compat/database';
import {  AngularFireList } from '@angular/fire/compat/database';
import { Cart,} from '../cart';
import {HomeService} from'../service/Home.service'
import { Tutorial } from '../models/tutorial.model';
import { Item } from 'firebase/analytics';
const firebaseConfig = {
  apiKey: "AIzaSyAAnanXP-mX5HGkihVGkqM0Q9gkgto9pIc",
  authDomain: "demoweb-8ddb9.firebaseapp.com",
  projectId: "demoweb-8ddb9",
  storageBucket: "demoweb-8ddb9.appspot.com",
  messagingSenderId: "670550139755",
  appId: "1:670550139755:web:2fdd4f43e0c2efd712e22e",
  measurementId: "G-YPX00M60L9"
}

const Firebase = firebase.initializeApp(firebaseConfig);
//import * as firebase from 'firebase/app';
//import { database } from 'firebase/database';
//import { getDatabase } from '@firebase/database';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnChanges {


  tutorialsRef!: AngularFireList<Cart>;
  tutorial: Tutorial = new Tutorial();
  submitted = false;

    name !: string
    email !: string;
  private searchTerms = new Subject<string>();
  pass !: string;
  soluong : number = 0;
   binding !: number;
  Products2: products[] = [];
  filterproduct:  products[] = [];
  @Input() products:  products[] = this.filterproduct ;
  quantity: number = 0;
  quantityss = {};
  @Input() POSTS2:products[] = []
  btnActive = true;
  btnNonActive = true;
  cartquantity !: string ;
  itemstest = ['Trending ', 'Best Seller ', 'Music ','Photography','Sport'];
  selectedItem: any = [];
  items = this.cartservice.getItems();
  @Output() dataChanged = new EventEmitter<number>();
  @Output() addtocard = new EventEmitter<any>();
  ngOnChanges(changes: SimpleChanges): void {

  }
  constructor(private ProductService: ProductService,private postService: PostService,private cartservice: CartService,private homeservice : HomeService

  ){

   // this.fetchPosts1();
    this.getProduct1();

  }



ngOnInit(): void {

  setInterval(() => {

    this.cartservice.castUser.subscribe(user => this.cartquantity  = user);
    this.cartservice.editUser(this.sumsoluong());
  }, 300);




//this.addData();
 this.sumsoluong();

  this.getid();

}
handleChange() {
  // location.reload();
}
editedCart(user:string){
  this.cartservice.editUser(this.sumsoluong());
}


saveTutorial(): void {
  this.homeservice.create(this.tutorial).then(() => {
    console.log('Created new item successfully!');
    this.submitted = true;
  });
}

newTutorial(): void {
  this.submitted = false;
  this.tutorial = new Tutorial();
}

onListItemClick(item: string) {
  this.selectedItem = item;
}
getProduct1(): void {
  this.ProductService.getProduct()
  .subscribe(products => {this.Products2 = products.sort((a, b) =>  a.id - b.id );
    this.filterproduct = this.Products2
   this.products = this.Products2
});

 }
 getid(): void{
  let name :string = window.localStorage.getItem("name")as string;;
 console.log(' get local storegeL: ',name);

  this.searchTerms.next(name);
  this.filterproduct = this.Products2.filter((item) => item.brands.includes(name));

  //console.log('filter product lats tu local: ',this.filterproduct)
  window.localStorage.removeItem(name)

  //const name = localStorage.getItem("name");

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
  tableSize1: number = 8;
  tableSizes1: any = [3, 6, 9, 12];

  POSTS22:products[] = [];
  page2: number = 1;
  count2: number = 0;
  tableSize2: number = 8;
  tableSizes2: any = [3, 6, 9, 12];
  fetchPosts1(): void {
    this.postService.getAllPosts().subscribe(
      (response) => {
        this.POSTS1 = response;
        // this.POSTS2 = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  fetchPosts2(): void {
    this.postService.getAllPosts().subscribe(
      (response) => {

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
    //this.page2 = event;
    this.fetchPosts1();
  }
  onTableDataChange2(event: any) {
    console.log('event: ',event)
    // this.page1 = event;
    this.page2 = event;
    this.fetchPosts2();
  }





  onTableSizeChange1(event: any): void {
    this.tableSize1 = event.target.value;
    this.page1 = 1;
    this.fetchPosts1();
  }



  //cart

  summonney(){
    let sum: number = 0;
    this.items.forEach(item => sum +=item.soluong*item.pricesSales)
    return sum;
  }
sumsoluong(){
  let sumsl: number = 0;


  this.items.forEach(item => sumsl += item.soluong)

  //console.log('tng so luong',sumsl);
  return sumsl;


}
handleAddToCart(){
  // this.addtocard(),
}
addtocart(item : products ):void{
  this.cartservice.addToCart(item);

  console.log('lay cart: ',this.cartservice.getItems());

}
users:Array<any>=[{
  id:1,
  name:'Trending',
  active:false
},{
  id:2,
  name:'Best Seller',
  active:false
},{
  id:3,
  name:'Music',
  active:false
},{
  id:4,
  name:'Photography',
  active:false
},{
  id:5,
  name:'Sports',
  active:false
}

]
click(users :any, index: any){
  if(index !== 0){
    users[index-1].active = false;
  }
  users[index].active = true

}

isClick = false;
  isDisabled = false;

  changeColor() {
    this.isClick = !this.isClick;
  }

  disable() {
    this.isDisabled = !this.isDisabled;
  }



  // addData() {
  //   console.log(this.email,this.pass)

  //   const db = getFirestore();
  //   const usersCollection = collection(db, 'users');

  //   // Ghi một tài liệu vào collection 'users'.
  //   setDoc(doc(usersCollection, 'johndoe'), {
  //     email: 'johndoe@example.com',
  //     pass: 'password',
  //   });

  // }





  //  addData2() {
  //   console.log('data: 111')
  //   // Thêm dữ liệu vào Firebase
  //   logEvent(this.analytics, 'select_content', {
  //     content_type: 'image',
  //     content_id: 'P12453',
  //     items: [{ name: 'Kittens' }]

  //   });

  //   const event = logEvent(this.analytics,"select_content");
  //   const isAdded = event !== undefined;
  //   if (isAdded) {
  //     console.log("Dữ liệu đã được thêm vào");
  //   } else {
  //     console.log("Dữ liệu chưa được thêm vào");
  //   }
  // }



}





