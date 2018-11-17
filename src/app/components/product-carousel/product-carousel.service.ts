import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { ProductCatalogService } from '../../services/product-catalog.service';

@Injectable()
export class ProductCarouselService {
    constructor(private productCatalog: ProductCatalogService) {
        this.items = this.productCatalog.items;
    }

    items: Item[];
}
