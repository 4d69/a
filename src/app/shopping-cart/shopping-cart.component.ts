import { Component, OnInit } from '@angular/core';
import { Item } from './models/item';
import { ShoppingCartService } from './services/shopping-cart.service';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
    constructor(private cartService: ShoppingCartService, private dialogRef: MatDialogRef<ShoppingCartComponent>) { }

    displayedColumns: string[] = ['Image', 'Name', 'Price', 'Quantity', 'Total', 'Remove'];

    dataSource = this.cartService.shoppingCart.Items;

    ngOnInit() {
    }

    increaseQuantity(item: Item): void {
        item.Quantity = item.Quantity + 1;
    }

    decreaseQuantity(item: Item): void {
        if (item.Quantity === 1) {
            return;
        }
        item.Quantity = item.Quantity - 1;
    }

    remove(item: Item) {
        this.cartService.removeItem(item);
    }
}
