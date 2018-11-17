import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { CustomerReviewService } from 'src/app/customer-reviews/services/customer-review.service';
import { Item } from '../../models/item';
import { ProductCatalogService } from '../../services/product-catalog.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ProductCarouselService } from 'src/app/components/product-carousel/product-carousel.service';

declare var window;

@Component({
    selector: 'product-page',
    templateUrl: './product-page.component.html',
    styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
    constructor(
        private carouselService: ProductCarouselService,
        private productCatalog: ProductCatalogService,
        private reviewsService: CustomerReviewService,
        private route: ActivatedRoute,
        private shoppingCart: ShoppingCartService,
        private snackBarService: MatSnackBar
    ) { }

    item: Item;

    ngOnInit() {
        window.scrollTo(0, 0);

        this.route.params.subscribe(params => {
            let itemId = params['id']

            this.item = this.shoppingCart.getItem(itemId);

            if (!this.item) {
                this.item = this.productCatalog.getById(itemId);
            }

            this.reviewsService.getReviews(itemId);
        });
    }

    increaseQuantity(): void {
        if (this.item.Quantity === 99) {
            return;
        }
        this.item.Quantity = this.item.Quantity + 1;
    }

    decreaseQuantity(): void {
        if (this.item.Quantity === 0) {
            return;
        }
        this.item.Quantity -= 1;
    }

    addToCart(): void {
        this.shoppingCart.addItem(this.item);

        let msgRef = this.snackBarService.open('Item added to shopping cart', 'Undo', {
            duration: 3000,
        });

        msgRef.onAction().subscribe(() => {
            this.shoppingCart.removeItem(this.item);
        });
    }
}
