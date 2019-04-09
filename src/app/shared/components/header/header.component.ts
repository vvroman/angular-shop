import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  AfterContentInit,
  ElementRef,
  Inject
} from '@angular/core';
import { CartIconComponent } from 'src/app/cart/components/cart-icon/cart-icon.component';
import { ConstantsService } from 'src/app/core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [{ provide: 'Constants', useValue: ConstantsService }]
})
export class HeaderComponent implements AfterContentInit {
  @ViewChild('icons', { read: ViewContainerRef }) icons: ViewContainerRef;
  @ViewChild('appTitle') appTitle: ElementRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject('Constants') private constants
    ) {}

  ngAfterContentInit() {
    // set icon
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      CartIconComponent
    );
    this.icons.createComponent(factory);
    // set title
    this.appTitle.nativeElement.innerHTML = `${this.constants.APP_NAME} - ver.${this.constants.VER}`;
  }
}
