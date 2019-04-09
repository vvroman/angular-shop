import { Component, OnInit, Inject } from '@angular/core';
import { Generator, GeneratorFactory } from 'src/app/core/services/factory/generator.factory';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [ { provide: Generator, useFactory: GeneratorFactory(16)} ]
})
export class FooterComponent implements OnInit {

  constructor(@Inject(Generator) private generator: string) { }

  get randomNumber(): string {
    return this.generator;
  }
  ngOnInit() {
  }

}
