import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-slider',
  templateUrl: './cards-slider.component.html',
  styleUrls: ['./cards-slider.component.scss']
})
export class CardsSliderComponent {
@Input() item !: any ;
}
