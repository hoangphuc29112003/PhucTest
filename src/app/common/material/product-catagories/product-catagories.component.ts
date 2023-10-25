import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Catagories } from 'src/app/catagories';
@Component({
  selector: 'app-product-catagories',
  templateUrl: './product-catagories.component.html',
  styleUrls: ['./product-catagories.component.scss']
})
export class ProductCatagoriesComponent {
@Output() getpd = new EventEmitter();
@Input() catagories: any;
ngOnInit(){

console.log('get catagotrie: ',this.catagories)
}
getpdbyname(cataname :any ){

  this.getpd.emit(cataname)
}


}




