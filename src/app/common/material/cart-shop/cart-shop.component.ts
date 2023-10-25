import { set } from 'firebase/database';
import { FormsModule } from '@angular/forms';
import { Component, Input,NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { products } from 'src/app/products';
import { CartService } from 'src/app/cart-service';

@Component({
  selector: 'app-cart-shop',
  templateUrl: './cart-shop.component.html',
  styleUrls: ['./cart-shop.component.scss']
})
export class CartShopComponent {
  items = this.cartservice.getItems();
@Input() item !: any;
quantity: number = 0 ;
 sumsl: number = 0;

//soluong !: number;
//quantity1: number = this.item.quantity;
test : any = '0'
getId! : number ;
getsl! : number ;
constructor(private cartservice : CartService){



//  this.item = this.items.filter((i) => (String(i.id).includes(String(this.item.id)),console.log('ID: ',this.item.id
//  )))


//  this.items.forEach( item=> this.quantity= item.soluong)
//     console.log('so luong mua: ',this.quantity)

}
ngOnInit(){
  setInterval(() => {
    let num : string = String(this.quantity)
    this.cartservice.castUser.subscribe(user => num  = user);
    this.cartservice.editUser(this.sumsoluong());
  }, 300);

this.LoadData()



  // this.items.filter((i) =>{ (String(i.soluong).includes((this.test))
  //   ,console.log('ID cua test: ',this.item.id

  //  )
  //  )})


  //  this.items.filter((i) => {
  //   if (String(i.soluong).includes(this.test)) {
  //     console.log('tim id',i.id);
  //   }
  // });
  //  ////////////////////////
  this.items.forEach((i) => {
    console.log('ID i: ',i.id);
    console.log('so luong i: ',i.soluong);
  });
//     console.log('so luong mua: ',this.quantity)
//  this.item = this.items.filter((i) => (String(i.id).includes(String(this.item.id)),console.log('ID: ',this.item.id
//  )))

}

sumsoluong(){
  let sumsl: number = 0;


  this.items.forEach(item => sumsl += item.soluong)

  //console.log('tng so luong',sumsl);
  return sumsl;


}
LoadData(){

  this.items.forEach((i) => {


    this.items.filter((i) => {
  if (String(i.id).includes(this.item.id)) {
    this.getId = i.id
    this.getsl = i.soluong
    this.quantity = i.soluong;
    console.log('tim id',i.id);
  }
});
  console.log('ID i: ',this.getId);
  console.log('so luong i: ',this.getsl);
});
}

add(){
  if(this.quantity == 0){
    this.addtocart(this.item );
   // this.quantity++
    //this.LoadData()

  }else{
    //this.LoadData()
    //this.quantity++

    this.addtocart(this.item );
    // console.log('cong : ',this.quantity)
    // //this.change();
    // this.items.forEach((i) => {
    //   console.log('ID i: ',i.id);
    //   console.log('so luong i: ',i.soluong);
    // });
  }

//this.change()
}
reduc(item1: any,id:any){
  //if(this.quantity <= 0){

  //this.quantity = 0;
  //this.addtocart(this.item );
  //console.log('tru : ',this.quantity)
  //}else{


    this.items.filter((i) => {
      (String(i.id).includes(id))
      let soluong !: number;
       this.quantity =  item1

       console.log("quantity1: ",this.quantity)
       this.quantity--
       console.log("quantity sau reduc: ",this.quantity)
      //item.solong get from [(ngModel)]="item.soluong"
      this.items.forEach(item => item.soluong = this.quantity )
      console.log("quantity",this.quantity)
      soluong = this.sumsl;


      return this.sumsl;

    });
 // }

  }




change(id: any){
  this.items.filter((i) => {
    (String(i.id).includes(id))
    let soluong !: number;

    console.log('change: ', this.sumsl)
    console.log('soluong : ',  this.item.soluong)
    //item.solong get from [(ngModel)]="item.soluong"
    this.items.forEach(item => this.sumsl += item.soluong)
    console.log('soluong : ',  this.item.soluong)
    console.log('change soluong : ', this.sumsl)
    soluong = this.sumsl;

    console.log('change: ', this.sumsl)
    return this.sumsl;

  });





 //// this.items.forEach(item => sumsl = item.soluong)
  // this.soluong = this.quantity;
  // console.log('change: ', this.soluong)

  // console.log('change tu quantyti: ', this.quantity)

}

addtocart(item : products ):void{
  this.cartservice.addToCart(item);

  console.log('lay cart: ',this.cartservice.getItems());

}
}
