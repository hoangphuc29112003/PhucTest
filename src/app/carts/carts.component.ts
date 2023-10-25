import { CartService } from './../cart-service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { products } from './../products';
import { Input, OnInit } from '@angular/core';
import { ProductService } from '../products.service'
import { ActivatedRoute } from '@angular/router';
import { Cart } from '../cart';

import * as FileSaver from 'file-saver';
import * as xlsx from 'xlsx';
import * as XLSX from 'xlsx';
import  {jsPDF} from 'jspdf';

import autoTable from 'jspdf-autotable'

interface StyleInfo {
  fill?: {
      fgColor?: { index: number };
  };
}

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent {
 images = [
    { url: "https://example.com/image1.png" },
    { url: "https://example.com/image2.png" },
    { url: "https://example.com/image3.png" }
  ];
  soluong !: number;
  //@Input() cart : number = this.sumsoluong();
  Products: products[] = [];
  getid !: string ;
  num !: number;
  cartquantity !: string ;
  newcartquantity !: string ;
  constructor(private ProductService: ProductService,private route: ActivatedRoute, private cartservice: CartService){

    //console.log('lazzyyy loadddd')
}
  ngOnInit(): void {
    // this.cartservice.editUser(this.change());
    this.cartservice.castUser.subscribe(user => this.cartquantity  = user);
    this.cartservice.editUser(this.sumsoluong());
    this.getProduct();
    this.route.paramMap.subscribe(params => {
      this.getid = params.get('item.id') || '';
     console.log('id :',this.getid)
      console.log('id :',this.Products)
   });
   this.num = parseInt(this.getid);
  }



  ngOnchanges(){
    // this.cartservice.editUser(this.sumsoluong());
    // this.cartservice.castUser.subscribe(user => this.cartquantity  = user);

    // this.getProduct();
  }
  // editedCart(user:string){
  //   this.cartservice.editUser(this.sumsoluong());
  // }
  getProduct(): void {
    this.ProductService.getProduct()
    .subscribe(products => this.Products = products.sort((a, b) =>  b.id - a.id ));
  }
  items = this.cartservice.getItems();
  summonney(){
    let sum: number = 0;
    this.items.forEach(item => sum +=item.soluong*item.pricesSales)
    return sum;
  }
  change(){
    let sumsl: number = 0;
    console.log('change: ', sumsl)
    console.log('soluong : ', this.soluong)
    this.items.forEach(item => sumsl += item.soluong)
    console.log('soluong : ', this.soluong)
    console.log('change soluong : ', sumsl)
    this.soluong = sumsl;

    console.log('change: ', sumsl)
    return sumsl;

  }


sumsoluong(){
  let sumsl: number = 0;


  this.items.forEach(item => sumsl += item.soluong)
  this.soluong = sumsl;
  return sumsl;

  console.log('tng so luong',sumsl)
}
removeItem(sp: Cart) {
  this.cartservice.removeProduct(sp);

}
// removeItem2() {
//   // nếu giá trị nhập vào bé hơn 1 thì gọi hàm xóa
//   if (this.item.soluong < 1) {
//     this.cartservice.removeProduct(this.sp);
//   }
// }
date = new Date();
title = 'export-excel';
fileName = 'ExportExce.xlsx';
exportexcel(): void {
    // /* pass here the table id */
    // const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.items);

    // const wb: XLSX.WorkBook = XLSX.utils.book_new();
    // XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    // /* save to file */
    // XLSX.writeFile(wb, this.fileName);
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.items);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    /* save to file */
    XLSX.writeFile(wb, this.fileName);
}



 exportexcel2(): void {
  const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.items);

  const wb: XLSX.WorkBook = XLSX.utils.book_new();

  // Tô màu vàng cho hàng tiêu đề
  const headerStyle: StyleInfo = {
      fill: {
          fgColor: { index: 14 } // Màu vàng
      }
  };
  ws['A1:E1'].s = headerStyle;

  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  /* save to file */
  XLSX.writeFile(wb, this.fileName);
}
exportFile() {
  const doc = new jsPDF();
  const bodyData: any = [];
    // Lấy dữ liệu từ trang HTML
    const data = document.getElementById('cc')?.querySelectorAll('tr') ?? [];

    // Chuyển đổi dữ liệu từ trang HTML sang dạng mảng
    this.items.forEach((item) => {
      const ID1: number = item.id;
      const name1: string = item.name;
      const price: number = item.pricesSales;
      const soluong1: number = item.soluong;
      const thanhtien1: number = item.pricesSales * item.soluong;
      const ngay: Date = this.date;

      bodyData.push([ID1,name1, price,soluong1, thanhtien1, ngay]);
    });
  autoTable(doc, {

    head: [['ID       ','Product Name        ', 'Price        ', 'Quantity          ', 'Sum   ','Time']],
    body: bodyData,
    didDrawCell: (data) => { },
  });

  // Lưu PDF
  //doc.save('my-file.pdf');
  doc.output('dataurlnewwindow');
}

getBase64Image(img: HTMLImageElement) {
  var canvas = document.createElement("canvas");
  console.log("image");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx?.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL("image/png");
  return dataURL;
}
download() {
  let doc = new jsPDF();
  autoTable(doc,{html: '#cc'});
// output(doc,{'datauri','test.pdf'});
  doc.output('dataurlnewwindow');

  //doc.output('test.pdf');

}


}






