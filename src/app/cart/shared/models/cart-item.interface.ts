import { IProduct } from 'src/app/products/models/product.interface';

export interface ICartItem {
    item: IProduct;
    quantity: number;
}
