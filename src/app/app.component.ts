import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(
        private cartService: ShoppingCartService, /* used in html */
        private dialog: MatDialog
    ) {}

    menu: boolean = false;

    searching: boolean = false;

    openShoppingCart(): void {
        this.menu = false;
        this.searching = false;

        this.dialog.open(ShoppingCartComponent, {
            width: '980px'
        });
    }
}
