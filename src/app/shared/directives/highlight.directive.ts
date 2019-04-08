import {
  Directive,
  HostListener,
  ElementRef,
} from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') mouseOver() {
    this.el.nativeElement.style.backgroundColor = 'red';

  }

  @HostListener('mouseout') mouseOut() {
  }

  constructor(public el: ElementRef) {}
}
