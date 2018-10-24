import { Injectable } from '@angular/core';

import { ShoppingCart } from '../models/shopping-cart';
import { Item } from '../models/item';

const TAX_RATE = 0.0875;

@Injectable()
export class ShoppingCartService {
    constructor() {
        console.log('init: ShoppingCartService');

        this.shoppingCart.Items = [
            { Id: 1, Name: 'Pink Blossom', ImagePath: '1.jpg', Quantity: 1, Price: 3.99 },
            { Id: 2, Name: 'Lemonade', ImagePath: '2.jpg', Quantity: 3, Price: 2.99 },
            { Id: 3, Name: 'Lemon Lime', ImagePath: '3.jpg', Quantity: 1, Price: 4.99 },
            { Id: 4, Name: 'Sherbert', ImagePath: '4.jpg', Quantity: 2, Price: 2.99 }
        ];
    }

    shoppingCart: ShoppingCart = new ShoppingCart();

    clear(): void {
        this.shoppingCart.Items.forEach((item: Item) => {

        });
    }

    addItem(): void {

    }

    removeItem(item: Item): void {
        this.shoppingCart.Items.splice(this.shoppingCart.Items.indexOf(item), 1);
    }

    getTotalCost(): number {
        let cost = 0;
        this.shoppingCart.Items.forEach((item: Item) => {
            cost = cost + (item.Price * item.Quantity);
        });
        return cost;
    }

    getTax(): number {
        return this.getTotalCost() * TAX_RATE;
    }
}
