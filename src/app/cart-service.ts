//cart.service.ts
import { Injectable } from '@angular/core';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { Cart } from './cart';
import { HttpClient } from '@angular/common/http';
import { products } from './products';
import {BehaviorSubject} from 'rxjs';
@Injectable({ providedIn: 'root'})
export class CartService {
  constructor(  private h:HttpClient ) {
    let sumsl: number = 0;


    this.items.forEach(item => sumsl += item.soluong)
    this.soluong = sumsl;

  }
  items: Cart[] = [];
  soluong !: number;
  addToCart(sp: products ) {
    // tìm kiếm vị trí đầu tiên của phần tử trong mảng thỏa mãn điều kiện được cung cấp. neu ko co index se tra ve -1
    var index = this.items.findIndex(item => item.id == sp.id)
    if(index >=0){
      this.items[index].soluong++ //tang so luong khi da co
    }else{ //tao ra khi chua co trong gio hang
      let c:Cart;
      c = {
        id: sp.id,
        name: sp.name,
        pricesSales:sp.pricesSales,
        soluong: 1,
        img:sp.img,
      }
      this.items.push(c);
      this.sumsoluong();
    }
   ;
  }
  removeProduct(sp: Cart) {
    // tìm kiếm vị trí đầu tiên của phần tử trong mảng thỏa mãn điều kiện được cung cấp. neu ko co index se tra ve -1
    var index = this.items.findIndex(item => item.id == sp.id);
    if (index >= 0) {
      // xóa phần tử khỏi mảng
      this.items.splice(index, 1);
    }
  }
  sumsoluong(){
    let sumsl: number = 0;


    this.items.forEach(item => sumsl += item.soluong)
    this.soluong = sumsl;
    return sumsl;


  }

  getItems() { return this.items; }
  clearCart() { this.items = []; return this.items;}
  private user = new BehaviorSubject<string>('0');
  castUser = this.user.asObservable();

  editUser(newUser: any){
    this.user.next(newUser);
  }

//////////////////////////////////////////localstore


getItems2() {
  return this.items;
}

loadCart(): void {
 // this.items = JSON.parse(localStorage.getItem('cart_items')) ?? [];
}

saveCart(): void {
  localStorage.setItem('cart_items', JSON.stringify(this.items));
}

// clearCart2(items) {
//   this.items = [];

//   localStorage.removeItem('cart_items');
// }

// removeItem(item) {
//   const index = this.items.findIndex((o) => o.id === item.id);

//   if (index > -1) {
//     this.items.splice(index, 1);
//     this.saveCart();
//   }
// }

// itemInCart(item): boolean {
//   return this.items.findIndex((o) => o.id === item.id) > -1;
// }
}
