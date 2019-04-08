import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './components/page/page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule, MatIconModule } from '@angular/material';
import { CartModule } from '../cart/cart.module';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    PageComponent,
    HeaderComponent,
    FooterComponent,
    HighlightDirective
  ],
  imports: [CommonModule, MatToolbarModule, MatIconModule, CartModule],
  exports: [PageComponent, HighlightDirective]
})
export class SharedModule {}
