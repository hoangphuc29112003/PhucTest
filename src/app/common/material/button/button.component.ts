import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
@Input() color: string = 'pink';
s = [
  {
    text : 'Mua Hàng',
    width: '',
    height: '40px',
    color : 'white',
    bgcolor : 'black',
    colorhover: 'white',
    bgcolorhover : 'rgb(242, 80, 80)',

  },

];
ngOnInnit(){

}
}

