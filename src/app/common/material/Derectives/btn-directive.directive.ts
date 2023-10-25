import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBtnDirective]'

})
export class BtnDirectiveDirective{
  defaultrans :string = 'all 0.3s ease-in-out'
  // @Input() highlightColor : string = 'rgb(242, 80, 80)';
  @HostBinding('style.border') bordernone : string  = 'none';
  @HostBinding('style.fontSize') fontsize : string  = 'small';
  @HostBinding('style.fontWeight') fontweight : string  = 'bold';
  @HostBinding('style.backgroundColor') backgroundColor!: string;
  @HostBinding('style.color') color!: string;
  @HostBinding('style.width') width!: string;
  @HostBinding('style.height') height!: string;
  @HostBinding('style.transition') transition!: String;
  @Input() items!: Array<any>;
  constructor(private elementRef: ElementRef){

  }

 ngOnInit(){


   this.default();
   this.Transition();
 }
default(){
  this.fontsize;
  this.fontweight;
 this.bordernone;

  this.backgroundColor = this.items[0].bgcolor;;
  this.color =this.items[0].color;
  this.height =this.items[0].height;
  this.width = this.items[0].width;;

  // this.elementRef.nativeElement.style.color = this.items[0].color;
  // this.elementRef.nativeElement.background = this.items[0].bgcolor;
console.log('height',this.height)

}

Transition(){
this.transition = this.defaultrans
}


 @HostListener('mouseenter') mouseover(eventData: Event){
   this.backgroundColor = this.items[0].bgcolorhover;;
   this.color =this.items[0].colorhover;
 }

 @HostListener('mouseleave') mouseleave(eventData: Event){
   this.backgroundColor = this.items[0].bgcolor;;
   this.color =this.items[0].color;
 }
}
