import { CartsComponent } from './../carts/carts.component';

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
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})

export class InvoiceComponent {
  summonney !: number;
  sumsoluong !: number;
  date  : Date ;
  constructor(private ProductService: ProductService,private route: ActivatedRoute, private cartservice: CartService,cart: CartsComponent){
    this.summonney= cart.summonney();
    this.sumsoluong = cart.sumsoluong();
    this.date = cart.date;
    console.log('sum',this.summonney);

}
items = this.cartservice.getItems();
exportexcel(): void {
  let fileName = 'ExportExce.xlsx';
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
  XLSX.writeFile(wb, fileName);
}

exportFile() {
  const doc = new jsPDF();
  const bodyData: any = [];
  const bodyData2: any = [];
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
    const sub : number = this.sumsoluong;
    const total : number = this.summonney;
    bodyData2.push([sub,total]);
    autoTable(doc, {
      head: [['ID       ','Product Name        ', 'Price        ', 'Quantity          ', 'Sum   ','Time']],
      body: bodyData,
      didDrawCell: (data) => { },
      });

      autoTable(doc, {
      head: [['SUB      ','    TOTAL']],
      body: bodyData2,
      didDrawCell: (data) => { },
      });

  // Lưu PDF
  //doc.save('my-file.pdf');
  doc.output('dataurlnewwindow');
}
}
