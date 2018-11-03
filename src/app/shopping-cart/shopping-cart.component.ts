import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Item } from '../product-catalog/item';
import { ShoppingCartService } from './shopping-cart.service';
import { MatDialogRef, MatTableDataSource } from '@angular/material';

@Component({
    selector: 'shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.css']
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
}
