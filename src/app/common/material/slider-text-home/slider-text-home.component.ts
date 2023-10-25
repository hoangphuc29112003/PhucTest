import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider-text-home',
  templateUrl: './slider-text-home.component.html',
  styleUrls: ['./slider-text-home.component.scss']
})
export class SliderTextHomeComponent {
@Input() h1 !: string
@Input() p !: string
@Input() btn !: string
@Input() items!: Array<any>;
ngOnInit(){
  this.h1 = this.items[0].h1
  this.p = this.items[0].p
  this.btn = this.items[0].btn
}
}
