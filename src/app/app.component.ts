import { Component } from '@angular/core';

import { ShoppingCartService } from './shopping-cart/shopping-cart.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private cartService: ShoppingCartService /* used in html */) {}

    menu: boolean = false;
}
