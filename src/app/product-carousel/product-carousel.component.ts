import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';
import { MatDialog } from '@angular/material';
import { Item } from '../product-catalog/item';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
    selector: 'product-carousel',
    templateUrl: './product-carousel.component.html',
    styleUrls: ['./product-carousel.component.css'],
    animations: [
        trigger('slideInOut', [
            state('in', style({
                transform: 'translate3d(0, 0, 0)'
            })),
            state('out', style({
                transform: 'translate3d(100%, 0, 0)'
            })),
            transition('in => out', animate('400ms ease-in-out')),
            transition('out => in', animate('400ms ease-in-out'))
        ])
    ]
})
export class ProductCarouselComponent implements OnInit {
    constructor(private dialog: MatDialog) { }

    @Input('title') title: string;;

    @Input('items') items: Item[];

    @Input('maxDisplayed') maxDisplayed: number = 5;

    displayedItems: Item[];

    ngOnInit(): void {
        this.getDisplayedItems();
    }

    getDisplayedItems(): void {
        this.displayedItems = this.items.slice(0, this.maxDisplayed);
    }

    addIndex(): void {
        let item = this.items[0];
        this.items.shift();
        this.items.push(item);
        this.getDisplayedItems();
    }

    subtractIndex(): void {
        let item = this.items[this.items.length-1];
        this.items.pop();
        this.items.unshift(item);
        this.getDisplayedItems();
    }

    openProductCard(item: Item): void {
        this.dialog.open(ProductCardComponent, {
            width: '400px',
            autoFocus: false,
            data: {
                item: item
            }
        });
    }
}
