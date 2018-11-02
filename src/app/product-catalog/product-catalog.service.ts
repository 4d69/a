import { Injectable } from '@angular/core';

import { Item } from './item';

@Injectable()
export class ProductCatalogService {
    constructor() {
        console.log('init: ProductCatalogService');
    }

    items: Item[] = [
        { Id: 10, Category: 1, Tags: ['Vanilla'], Name: 'Vanilla Cotton', Description: '', Price: 8.99, ImagePath: 'Candle4.jpg', Quantity: 1 },
        { Id: 11, Category: 1, Tags: ['Lemon'], Name: 'Lemon Drop', Description: '', Price: 8.99, ImagePath: 'Candle2.jpg', Quantity: 1 },
        { Id: 12, Category: 1, Tags: [], Name: 'Jack Frost', Description: '', Price: 8.99, ImagePath: 'Candle3.jpg', Quantity: 1 },
        { Id: 13, Category: 1, Tags: ['Coffee', 'Vanilla', 'Macadamia Nut'], Name: 'Macadamia Nut Coffee', Description: '', Price: 8.99, ImagePath: 'Candle4.jpg', Quantity: 1 },
        { Id: 14, Category: 1, Tags: ['Sugar', 'Cream'], Name: 'Creme Brulee', Description: '', Price: 8.99, ImagePath: 'Candle3.jpg', Quantity: 1 },
        { Id: 15, Category: 1, Tags: ['Cranberry'], Name: 'Cranberry Kettle Corn', Description: '', Price: 8.99, ImagePath: 'Candle4.jpg', Quantity: 1 },
        { Id: 16, Category: 1, Tags: ['Tropical'], Name: 'Butt Naked', Description: '', Price: 8.99, ImagePath: 'Candle3.jpg', Quantity: 1 },
        { Id: 17, Category: 1, Tags: ['Floral'], Name: 'Sweet Pea', Description: '', Price: 8.99, ImagePath: 'Candle2.jpg', Quantity: 1 },
        { Id: 18, Category: 1, Tags: ['Fruity', 'Tropical'], Name: 'Mango Papaya', Description: '', Price: 8.99, ImagePath: 'Candle4.jpg', Quantity: 1 },
        { Id: 19, Category: 1, Tags: ['Blueberry'], Name: 'Blueberry Cobbler', Description: '', Price: 8.99, ImagePath: 'Candle2.jpg', Quantity: 1 },
        { Id: 19, Category: 4, Tags: [], Name: 'Candle Pack', Description: '', Price: 19.99, ImagePath: 'Candle5.jpg', Quantity: 1 }
    ];

    getProductType(item: Item): string {
        switch (item.Category) {
            case 1:
                return 'Soy Candle';
                break;
            case 2:
                return 'Natural Soap';
                break;
            case 3:
                return 'Bath Accessory';
                break;
            case 4:
                return 'Gift Set';
                break;
            default:
                return '';
                break;
        }
    }
}
