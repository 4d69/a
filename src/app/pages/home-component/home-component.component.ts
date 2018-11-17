import { Component, OnInit } from '@angular/core';

import { Item } from '../../models/item';
import { ProductCatalogService } from '../../services/product-catalog.service';

@Component({
    selector: 'home-component',
    templateUrl: './home-component.component.html',
    styleUrls: ['./home-component.component.scss']
})
export class HomeComponent implements OnInit {
    constructor(private productCatalog: ProductCatalogService) { }

    soyCandleItems: Item[];

    ngOnInit() {
        this.soyCandleItems = this.productCatalog.items;
    }
}
