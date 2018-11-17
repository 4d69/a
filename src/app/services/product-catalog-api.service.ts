import { Injectable } from '@angular/core';

import { Item } from '../models/item';

const testItems: Item[] = [
    { Id: 10, Category: 'Soy Wax Candles', Tags: [], Name: 'Vanilla Cotton', Description: '', Price: 8.99, ImagePath: 'Candle2.jpg', Quantity: 1 },
    { Id: 11, Category: 'Soy Wax Candles', Tags: [], Name: 'Lemon Drop', Description: '', Price: 8.99, ImagePath: 'Candle3.jpg', Quantity: 1 },
    { Id: 12, Category: 'Soy Wax Candles', Tags: [], Name: 'Jack Frost', Description: '', Price: 8.99, ImagePath: 'Candle4.jpg', Quantity: 1 },
    { Id: 13, Category: 'Soy Wax Candles', Tags: [], Name: 'Macadamia Nut Coffee', Description: '', Price: 8.99, ImagePath: 'Candle3.jpg', Quantity: 1 },
    { Id: 14, Category: 'Soy Wax Candles', Tags: [], Name: 'Creme Brulee', Description: '', Price: 8.99, ImagePath: 'Candle4.jpg', Quantity: 1 },
    { Id: 15, Category: 'Soy Wax Candles', Tags: [], Name: 'Cranberry Kettle Corn', Description: '', Price: 8.99, ImagePath: 'Candle2.jpg', Quantity: 1 },
    { Id: 16, Category: 'Soy Wax Candles', Tags: [], Name: 'Butt Naked', Description: '', Price: 8.99, ImagePath: 'Candle2.jpg', Quantity: 1 },
    { Id: 17, Category: 'Soy Wax Candles', Tags: [], Name: 'Sweet Pea', Description: '', Price: 8.99, ImagePath: 'Candle4.jpg', Quantity: 1 },
    { Id: 18, Category: 'Soy Wax Candles', Tags: [], Name: 'Mango Papaya', Description: '', Price: 8.99, ImagePath: 'Candle3.jpg', Quantity: 1 },
    { Id: 19, Category: 'Soy Wax Candles', Tags: [], Name: 'Blueberry Cobbler', Description: '', Price: 8.99, ImagePath: 'Candle3.jpg', Quantity: 1 },
    { Id: 20, Category: 'Gift Sets', Tags: [], Name: 'Candle Set', Description: '', Price: 19.99, ImagePath: 'Candle5.jpg', Quantity: 1 }
];

@Injectable()
export class ProductCatalogApiService {
    constructor() {
        console.log('init: ProductCatalogApiService');
    }

    getAll(): Item[] {
        return testItems;
    }

    post(): void {
        console.log('ProductCatalogApiService.post');
    }
    
    put(): void {
        console.log('ProductCatalogApiService.put');
    }

    delete(): void {
        console.log('ProductCatalogApiService.delete');
    }
}
