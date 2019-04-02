import { Product } from '../models/product.model';
import { ProductCategories } from '../shared/product-categories';

export const productsMock: Product[] = [
  new Product(
    1,
    'DOOGEE X70',
    'Fast shipping DOOGEE X70 Big batter 4000mAh Smartphone MTK6580A 2GB 16GB Android 8.1 5.5 Inch 19:9 Mobile Phone',
    68.99,
    ProductCategories.Category1,
    true,
    ['cool', 'cheap', 'bestBuy']
  ),
  new Product(
    2,
    'Car Phone Holder',
    'Baseus Intelligent Touch Sensor Car Phone Holder For iPhone XR XS X Samsung Gravity Air Vent Car Mount Mobile Phone Holder Stand',
    18.39,
    ProductCategories.Category2,
    false,
    ['cool', 'cheap', 'bestBuy']
  ),
  new Product(
    3,
    'Phone Holder',
    'Description  Description  Description  Description  Description  Description  Description  Description  Description  ',
    11.39,
    ProductCategories.Category2,
    true,
    ['cool', 'cheap', 'bestBuy']
  )
];
