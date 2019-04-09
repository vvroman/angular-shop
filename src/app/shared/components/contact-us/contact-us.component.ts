import { Component, OnInit, Inject, Optional } from '@angular/core';
import { ConfigOptionsService, ConstantsService } from 'src/app/core/services';
import { Generator, GeneratorFactory } from 'src/app/core/services/factory';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  providers: [
    { provide: 'Constants', useValue: ConstantsService },
    { provide: Generator, useFactory: GeneratorFactory(16) }
  ]
})
export class ContactUsComponent implements OnInit {
  constructor(
    public configOptions: ConfigOptionsService,
    @Inject('Constants') @Optional() public constants,
    @Inject(Generator) @Optional() public generator: string
  ) {}

  ngOnInit() {
    this.configOptions.setOptions({ foo: 'foo', bar: 'bar' });
  }
}
