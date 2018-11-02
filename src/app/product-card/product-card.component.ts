import { Component, Inject, OnInit } from '@angular/core';
import { Item } from '../shopping-cart/models/item';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ShoppingCartService } from '../shopping-cart/services/shopping-cart.service';

@Component({
    selector: 'product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
    constructor(
        private cartService: ShoppingCartService,
        public dialogRef: MatDialogRef<ProductCardComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    item: Item;

    ngOnInit() {
        this.item = this.data.item;
    }

    increaseQuantity(): void {
        this.item.Quantity = this.item.Quantity + 1;
    }

    decreaseQuantity(): void {
        if (this.item.Quantity === 1) {
            return;
        }
        this.item.Quantity = this.item.Quantity - 1;
    }

    reset(): void {
        this.item.Quantity = 1;
    }
    
    addToCart(): void {
        this.cartService.addItem(this.item);
        this.dialogRef.close();
    }
}
