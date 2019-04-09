import {
  Directive,
  HostListener,
  ElementRef,
  Input,
} from '@angular/core';
import { mixinColor } from '@angular/material';


@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {
  @Input('appShadow') color;

  @HostListener('click') mouseOver() {
    this.setShadow(`5px 5px 10px ${this.color}`);
  }

  @HostListener('mouseout') mouseOut() {
    this.setShadow(null);
  }

  setShadow(shadow: string) {
    this.el.nativeElement.style.boxShadow = shadow;
  }
  constructor(private el: ElementRef) {}
}
