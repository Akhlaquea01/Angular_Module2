import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
// color="red"
defaultColor="black"
  constructor(public el:ElementRef,private renderer:Renderer2) {
    // el.nativeElement.style.color="red";
   }
   ngOnInit(){
    this.color = this.defaultColor;
  }
  @HostBinding ('style.color') color:string = this.defaultColor;

   @HostListener('mouseenter') mouseover(){
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'orange');

    this.color=this.defaultColor;
  }
  @HostListener('mouseleave') mouseleave(){
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
    this.color=this.defaultColor;
  }

}
