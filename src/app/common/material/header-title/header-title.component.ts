import { HomeComponent } from './../../../home/home.component';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-header-title',
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.scss']
})
export class HeaderTitleComponent {
  @Input() h2: any;
  @Input() title1: any;
  @Input() title2: any;
  @Input() title3: any;
  // @Input()Title =[]

  constructor(){
// console.log('tttttt: ',this.Title)
  }
}


