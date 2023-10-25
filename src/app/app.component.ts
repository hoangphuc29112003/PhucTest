import { HomeComponent } from './home/home.component';
import { CartService } from './cart-service';
import { CartsComponent } from './carts/carts.component';
import { OnInit,Input, ViewChild } from '@angular/core';
import {Component, Inject,} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexFill,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
import { ProductService } from './products.service';
import { products } from './products';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  fill: ApexFill;
  colors: String[];
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};
export type ChartOptions1 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  fill: ApexFill;
  colors: String[];
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name1 = 'Angular';
  @ViewChild('chart', { static: false }) chart!: ChartComponent;
  public chartOptions : any;
  @ViewChild("chart1") chartt!: ChartComponent;
  public chartOptions1!: any;
  Products: products[] = [];
  animal?: string;
 name?: string;
  title = 'DemoWeb';
cart1 !: string ;
cart2 : number = 0 ;
constructor(private cart: CartsComponent,public dialog: MatDialog,private cartservice: CartService,private ProductService: ProductService,){

}
ngOnInit(){
  this.cartservice.castUser.subscribe(user => this.cart1 = user);
  // this.cart2 = this.cart1;
  console.log('cart lay tu cart',this.cart1)
this.scroll();
this.getProduct();

}
getProduct(): void {
  this.ProductService.getProduct()
  .subscribe(products => {
    const arr = products.sort((a, b) => a.id - b.id)
    this.chart1(arr);
    this.chart2(arr);
  });
}


chart1(arr: any){
  const data = arr.map((item: any) => item.pricesSales)
  this.chartOptions = {
    series: [
      {
        name: 'basic',
        data
      },
    ],
    chart: {
      type: 'bar',
      height: 700,
    },
    colors: [
      '#d4526e',
      '#13d8aa',
      '#A5978B',
      '#2b908f',
      '#f9a3a4',
      '#90ee7e',
      '#f48024',
      '#69d2e7',
    ],
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: arr.map((item: any) => item.name + item.id),
    },
  };
}
chart2(arr: any){
  const data = arr.map((item: any) => item.pricesSales)
  this.chartOptions1 = {
    series: [
      {
        name: "Inflation",
        data
      }
    ],
    chart: {
      height: 350,
      type: "bar"
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: "top" // top, center, bottom
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function(val : any) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"]
      }
    },

    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      position: "top",
      labels: {
        offsetY: -18
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5
          }
        }
      },
      tooltip: {
        enabled: true,
        offsetY: -35
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [50, 0, 100, 100]
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false,
        formatter: function(val :any) {
          return val + "%";
        }
      }
    },
    title: {
      text: "Monthly Inflation in Argentina, 2002",
      floating: 0,
      offsetY: 320,
      align: "center",
      style: {
        color: "#444"
      }
    }
  };
}
// check(){
//   this.cart1 = this.cart.change();
//   console.log('cart lay tu cart',this.cart1)
//   return this.cart1;
// }
openDialog(): void {
  const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    data: {name: this.name, animal: this.animal},
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed:', result);
    this.animal = result;
  });
}
scroll() {
  const scrollTop = window.scrollY;

  // Nếu người dùng đã cuộn trang xuống
  if (scrollTop > 100) {
    // Thay đổi màu nền thành vàng

    // Sử dụng toán tử nullish coalescing để đảm bảo rằng phần tử với id `menu1` không phải là null


  const menu1 = document.querySelector('#menu1');
  if (menu1 instanceof HTMLElement) {
    menu1.style.backgroundColor = 'yellow';
  }


}
}



}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['dialog-overview-example-dialog.scss'],
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
})
export class DialogOverviewExampleDialog {
  @Input() find: string = '';
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }
  save(){
    //  this.data.push(this.user);




      this.dialogRef.close(this.find)
      console.log('tim kiem : ',this.find)
      localStorage.setItem("name",this.find);
    }
  onNoClick(): void {
    this.dialogRef.close();
  }


}

