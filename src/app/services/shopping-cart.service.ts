import { Injectable } from '@angular/core';

import { Item } from '../models/item';

const TAX_RATE = 0.0875;

@Injectable()
export class ShoppingCartService {
    constructor() {
        console.log('init: ShoppingCartService');
    }

    // items: Item[] = [
    //     { Id: 10, Category: 'Soy Wax Candles', Tags: [], Name: 'Vanilla Cotton', Description: '', Price: 8.99, ImagePath: 'Candle4.jpg', Quantity: 1 },
    //     { Id: 30, Category: 'Soy Wax Candles', Tags: [], Name: 'Vanilla Cotton2', Description: '', Price: 8.99, ImagePath: 'Candle4.jpg', Quantity: 1 },
    //     { Id: 40, Category: 'Soy Wax Candles', Tags: [], Name: 'Vanilla Cotton3', Description: '', Price: 8.99, ImagePath: 'Candle4.jpg', Quantity: 1 },
    //     { Id: 50, Category: 'Soy Wax Candles', Tags: [], Name: 'Vanilla Cotton4', Description: '', Price: 8.99, ImagePath: 'Candle4.jpg', Quantity: 1 }
    // ];

    items: Item[] = [];

    addItem(item: Item): void {
        this.items.push(item);
    }

    removeItem(item: Item): void {
        this.items.splice(this.items.indexOf(item), 1);
    }

    contains(item: Item): boolean {
        let contained = false;
        this.items.forEach((cartItem: Item) => {
            if (item.Id === cartItem.Id) {
                contained = true;
            }
        });
        return contained;
    }

    getItem(itemId: number): Item {
        let item;
        this.items.forEach((cartItem: Item) => {
            if (itemId === cartItem.Id) {
                item = cartItem;
            }
        });
        return item;
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
