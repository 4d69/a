import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';

import { Item } from '../shopping-cart/models/item';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ActivatedRoute } from '@angular/router';

declare var window;

// Category property on Item class can also be an array for multiple filter types like candle and holiday at the same time
const TEST_ITEMS: Item[] = [
    { Id: 10, Category: 1, Name: 'Vanilla Cotton', Price: 8.99, ImagePath: 'VanillaCotton.jpg', Quantity: 1 },
    { Id: 11, Category: 1, Name: 'Lemon Drop', Price: 8.99, ImagePath: 'LemonDrop.jpg', Quantity: 1 },
    { Id: 12, Category: 1, Name: 'Jack Frost', Price: 8.99, ImagePath: 'JackFrost.jpg', Quantity: 1 },
    { Id: 13, Category: 1, Name: 'Macadamia Nut Coffee', Price: 8.99, ImagePath: 'VanillaMacadamiaNutCoffee.jpg', Quantity: 1 },
    { Id: 14, Category: 1, Name: 'Creme Brulee', Price: 8.99, ImagePath: 'CremeBrulee.jpg', Quantity: 1 },
    { Id: 15, Category: 1, Name: 'Cranberry Kettle Corn', Price: 8.99, ImagePath: 'CranberryKettleCorn.jpg', Quantity: 1 },
    { Id: 16, Category: 1, Name: 'Butt Naked', Price: 8.99, ImagePath: 'ButtNaked.jpg', Quantity: 1 },
    { Id: 17, Category: 1, Name: 'Sweet Pea', Price: 8.99, ImagePath: 'SweetPea.jpg', Quantity: 1 },
    { Id: 18, Category: 1, Name: 'Mango Papaya', Price: 8.99, ImagePath: 'MangoPapaya.jpg', Quantity: 1 },
    { Id: 19, Category: 1, Name: 'Blueberry Cobbler', Price: 8.99, ImagePath: 'BlueberryCobbler.jpg', Quantity: 1 },
    { Id: 19, Category: 4, Name: 'Candle Pack', Price: 19.99, ImagePath: 'Candle5.jpg', Quantity: 1 }
];

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'product-catalog',
    templateUrl: './product-catalog.component.html',
    styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {
    constructor(private dialog: MatDialog, private route: ActivatedRoute) {}

    dataSource: MatTableDataSource<Item> = new MatTableDataSource<Item>([]);

    items: Item[];

    filter: number = 0;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngOnInit(): void {
        window.scrollTo(0, 0);

        this.dataSource.paginator = this.paginator;

        this.dataSource.filterPredicate = (data, filter: string) => {
            return data.Category.toString() === filter || filter === '0' || filter === '';
        };
        
        this.route.params.subscribe(params => {
            let param = params['filter']
            this.dataSource.filter = param;

            if (param) {
                this.filter = Number(param);
            }
         });

        this.getProducts();
    }

    getProducts(): void {
        // Fetch from API
        // this.dataSource.data = response;
        this.dataSource.data = TEST_ITEMS;
    }

    filterChanged(filterType: number): void {
        this.dataSource.filter = filterType.toString();
        this.dataSource.paginator.firstPage();
    }

    sortChanged(sortType: number): void {
        // do some shit here
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
