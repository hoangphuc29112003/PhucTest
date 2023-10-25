import { HomeComponent } from './../home/home.component';


import { products } from './../products';
import { Component,OnInit, } from '@angular/core';

import { ProductService } from '../products.service'
import { PostService } from '../post.service';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
   Products: products[] = [];

 constructor(private ProductService: ProductService,private postService: PostService,private homeComponent: HomeComponent){
this.homeComponent.POSTS2 = this.POSTS;
  //console.log(this.Products.sort((a, b) => a.id - b.id));
  }
  pageSize: number = 3;
  currentPage: number = 1;
  onNext() {

    this.currentPage++;
    if(this.currentPage>((this.Products.length)/3)){ this.currentPage=1}
    //this.onNextIfLastSlide();

  }
  onPrev() {
    this.currentPage--;
    if(this.currentPage<1) {
      this.currentPage=(this.Products.length)/3
    }
    console.log('nho')
  }

  // Kiểm tra xem slide hiện tại có phải là slide cuối cùng hay không
  isLastSlide() {
    // const totalProducts = this.Products.length;
    // const pageRemainder = this.currentPage % totalProducts;
    // return pageRemainder === 0;
    const totalProducts = this.Products.length;
    const pageRemainder = this.currentPage % totalProducts;
    return pageRemainder === totalProducts - 1;
  }

  // Quay lại slide đầu tiên nếu slide hiện tại là slide cuối cùng
  onNextIfLastSlide() {
    if (this.isLastSlide()) {
      this.currentPage = 1;
    } else {
      this.onNext();
    }}
 ngOnInit(): void {
  this.getProduct();
  // this.fetchPosts();
  console.log('list')


}
getProduct(): void {
  this.ProductService.getProduct()
  .subscribe(products => this.Products = products.sort((a, b) => a.id - b.id));
}



//phan trang
POSTS: any;
page: number = 1;
count: number = 0;
tableSize: number = 4;
tableSizes: any = [3, 6, 9, 12];
// fetchPosts(): void {
//   this.postService.getAllPosts().subscribe(
//     (response) => {
//       this.POSTS = response;
//       console.log(response);
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
// }
onTableDataChange(event: any) {
  this.page = event;
  // this.fetchPosts();
}
onTableSizeChange(event: any): void {
  this.tableSize = event.target.value;
  this.page = 1;
  // this.fetchPosts();
}


}
