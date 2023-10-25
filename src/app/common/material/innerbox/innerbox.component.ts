import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-innerbox',
  templateUrl: './innerbox.component.html',
  styleUrls: ['./innerbox.component.scss']
})
export class InnerboxComponent {
@Input() strong !: string;
@Input() p!: string;
}
