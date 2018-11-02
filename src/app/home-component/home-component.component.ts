import { Component, OnInit } from '@angular/core';
import { Item } from '../product-catalog/item';

@Component({
    selector: 'home-component',
    templateUrl: './home-component.component.html',
    styleUrls: ['./home-component.component.css']
})
export class HomeComponent implements OnInit {
    constructor() { }

    soyCandleItems: Item[] = [
        { Id: 10, Category: 1, Tags: [], Name: 'Vanilla Cotton', Description: '', Price: 8.99, ImagePath: 'Candle4.jpg', Quantity: 1 },
        { Id: 11, Category: 1, Tags: [], Name: 'Lemon Drop', Description: '', Price: 8.99, ImagePath: 'Candle2.jpg', Quantity: 1 },
        { Id: 12, Category: 1, Tags: [], Name: 'Jack Frost', Description: '', Price: 8.99, ImagePath: 'Candle3.jpg', Quantity: 1 },
        { Id: 13, Category: 1, Tags: [], Name: 'Macadamia Nut Coffee', Description: '', Price: 8.99, ImagePath: 'Candle4.jpg', Quantity: 1 },
        { Id: 14, Category: 1, Tags: [], Name: 'Creme Brulee', Description: '', Price: 8.99, ImagePath: 'Candle3.jpg', Quantity: 1 },
        { Id: 15, Category: 1, Tags: [], Name: 'Cranberry Kettle Corn', Description: '', Price: 8.99, ImagePath: 'Candle4.jpg', Quantity: 1 },
        { Id: 16, Category: 1, Tags: [], Name: 'Butt Naked', Description: '', Price: 8.99, ImagePath: 'Candle3.jpg', Quantity: 1 },
        { Id: 17, Category: 1, Tags: [], Name: 'Sweet Pea', Description: '', Price: 8.99, ImagePath: 'Candle2.jpg', Quantity: 1 },
        { Id: 18, Category: 1, Tags: [], Name: 'Mango Papaya', Description: '', Price: 8.99, ImagePath: 'Candle4.jpg', Quantity: 1 },
        { Id: 19, Category: 1, Tags: [], Name: 'Blueberry Cobbler', Description: '', Price: 8.99, ImagePath: 'Candle2.jpg', Quantity: 1 },
    ];

    ngOnInit() {
    }

}
