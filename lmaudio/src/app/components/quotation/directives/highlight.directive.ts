import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') color:string;

  constructor(private el:ElementRef) { }

  @HostListener('mouseover') onMouseOver(){
    this.el.nativeElement.style.border = `2px solid ${this.color}`
    this.el.nativeElement.style.boxShadow = `1px 1px 10px ${this.color}, 1px 1px 10px ${this.color}`

  }
  @HostListener('mouseout') onmouseout() {
    this.el.nativeElement.style.border = 'none'
    this.el.nativeElement.style.boxShadow = 'none'
  }
}
