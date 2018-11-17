import { Injectable } from '@angular/core';

import { Item } from '../models/item';
import { ProductCatalogApiService } from './product-catalog-api.service';

@Injectable()
export class ProductCatalogService {
    constructor(private productCatalogApi: ProductCatalogApiService) {
        console.log('init: ProductCatalogService');

        this.items = this.productCatalogApi.getAll();
    }

    items: Item[];

    getById(id: string): any {
        let returnedItem;
        this.items.forEach(item => {
            if (item.Id === Number(id)) {
                returnedItem = item;
            }
        });
        return returnedItem;
    }
}
