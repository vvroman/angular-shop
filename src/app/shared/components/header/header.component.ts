import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  AfterContentInit,
  ElementRef
} from '@angular/core';
import { CartIconComponent } from 'src/app/cart/components/cart-icon/cart-icon.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterContentInit {
  @ViewChild('icons', { read: ViewContainerRef }) icons: ViewContainerRef;
  @ViewChild('appTitle') appTitle: ElementRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterContentInit() {
    // set icon
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      CartIconComponent
    );
    this.icons.createComponent(factory);
    // set title
    this.appTitle.nativeElement.innerHTML = 'AngularShop';
  }
}
