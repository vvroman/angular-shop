# Shop

TODO: add index.ts files to organize exports.

08.04.2019
- cartService, 
- localStorageService
- save cart to local storage 
- configOptions service (first implementation);

_Components_: 
- Product, 
- ProductList, 
- Cart

_Services_: 
- CartCommunication service - using RXJS to communicate between Product and Cart
- CartService - provide cart items
- ProductListService - provide products

_features_
- add item to cart, quantity per product calculation 
- cart subtotals calculation


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
