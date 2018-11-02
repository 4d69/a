import { Injectable } from '@angular/core';

import { Item } from '../product-catalog/item';

const TAX_RATE = 0.0875;

@Injectable()
export class ShoppingCartService {
    constructor() {
        console.log('init: ShoppingCartService');
    }

    items: Item[] = [];

    addItem(item: Item): void {
        this.items.push(item);
    }

    removeItem(item: Item): void {
        this.items.splice(this.items.indexOf(item), 1);
    }

    getTotalCost(): number {
        let cost = 0;
        this.items.forEach((item: Item) => {
            cost = cost + (item.Price * item.Quantity);
        });
        return cost;
    }

    getTax(): number {
        return this.getTotalCost() * TAX_RATE;
    }
}
