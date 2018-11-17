import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { Item } from '../../models/item';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
    selector: 'shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
    constructor(private changeDetectorRefs: ChangeDetectorRef, private cartService: ShoppingCartService) { }

    displayedColumns: string[] = ['Name', 'Price', 'Quantity', 'Total', 'Remove'];

    dataSource = new MatTableDataSource(this.cartService.items);

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
        this.dataSource = new MatTableDataSource(this.cartService.items);
        this.changeDetectorRefs.detectChanges();
    }

    checkout(): void {
        alert('checkout');
    }
}
