import { Component, OnInit } from '@angular/core';
import { Item } from '../shopping-cart/models/item';

@Component({
    selector: 'home-component',
    templateUrl: './home-component.component.html',
    styleUrls: ['./home-component.component.css']
})
export class HomeComponent implements OnInit {
    constructor() { }

    soyCandleItems: Item[] = [
        { Id: 10, Category: 1, Name: 'Vanilla Cotton', Price: 8.99, ImagePath: 'VanillaCotton.jpg', Quantity: 1 },
        { Id: 11, Category: 1, Name: 'Lemon Drop', Price: 8.99, ImagePath: 'LemonDrop.jpg', Quantity: 1 },
        { Id: 12, Category: 1, Name: 'Jack Frost', Price: 8.99, ImagePath: 'JackFrost.jpg', Quantity: 1 },
        { Id: 13, Category: 1, Name: 'Macadamia Nut Coffee', Price: 8.99, ImagePath: 'VanillaMacadamiaNutCoffee.jpg', Quantity: 1 },
        { Id: 14, Category: 1, Name: 'Creme Brulee', Price: 8.99, ImagePath: 'CremeBrulee.jpg', Quantity: 1 },
        { Id: 15, Category: 1, Name: 'Cranberry Kettle Corn', Price: 8.99, ImagePath: 'CranberryKettleCorn.jpg', Quantity: 1 },
        { Id: 16, Category: 1, Name: 'Butt Naked', Price: 8.99, ImagePath: 'ButtNaked.jpg', Quantity: 1 },
        { Id: 17, Category: 1, Name: 'Sweet Pea', Price: 8.99, ImagePath: 'SweetPea.jpg', Quantity: 1 },
        { Id: 18, Category: 1, Name: 'Mango Papaya', Price: 8.99, ImagePath: 'MangoPapaya.jpg', Quantity: 1 },
        { Id: 19, Category: 1, Name: 'Blueberry Cobbler', Price: 8.99, ImagePath: 'BlueberryCobbler.jpg', Quantity: 1 }
    ];

    ngOnInit() {
    }

}
