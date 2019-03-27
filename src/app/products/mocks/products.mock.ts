import { IProduct } from '../models/product.model';
import { ProductCategories } from '../shared/constants';

export const productsMock: IProduct[] = [
  {
    id: 1,
    name: 'DOOGEE X70',
    description:
      'Fast shipping DOOGEE X70 Big batter 4000mAh Smartphone MTK6580A 2GB 16GB Android 8.1 5.5 Inch 19:9 Mobile Phone',
    price: 68.99,
    category: ProductCategories.Category1,
    isAvailable: true,
    tags: ['cool', 'cheap', 'bestBuy']
  },
  {
    id: 2,
    name: 'Car Phone Holder',
    description:
      'Baseus Intelligent Touch Sensor Car Phone Holder For iPhone XR XS X Samsung Gravity Air Vent Car Mount Mobile Phone Holder Stand',
    price: 18.39,
    category: ProductCategories.Category2,
    isAvailable: false,
    tags: ['cool', 'cheap', 'bestBuy']
  },
  {
    id: 3,
    name: 'Phone Holder',
    description:
      'Description  Description  Description  Description  Description  Description  Description  Description  Description  ',
    price: 11.39,
    category: ProductCategories.Category2,
    isAvailable: false,
    tags: ['cool', 'cheap', 'bestBuy']
  }
];
