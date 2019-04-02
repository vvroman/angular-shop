import { Component, OnInit, Input, TemplateRef, ViewChild, ViewContainerRef, AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { CartIconComponent } from 'src/app/cart/components/cart-icon/cart-icon.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild('icons', { read: ViewContainerRef }) icons: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(CartIconComponent);
    this.icons.createComponent(factory);
  }
}
