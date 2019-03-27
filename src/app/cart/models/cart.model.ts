import { IProduct } from "src/app/products/models/product.model";

export interface ICart {
    goods: ICartItem[];
}

export interface ICartItem {
    item: IProduct;
    quantity: number;
}

export class Cart implements ICart {
    goods: [];

    get(): Promise<IProduct[]> {
        return Promise.resolve(this.goods);
    }
    push(product: IProduct, quantity: number): {
        return this.goods;
    } 

    private _findItemIndex(): number {
        return -1;
    }
}
