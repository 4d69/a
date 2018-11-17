import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { Item } from '../../models/item';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductCatalogService } from '../../services/product-catalog.service';

declare var window;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'product-catalog',
    templateUrl: './product-catalog.component.html',
    styleUrls: ['./product-catalog.component.scss']
})
export class ProductCatalogComponent implements OnInit {
    constructor(
        private dialog: MatDialog,
        private productCatalog: ProductCatalogService,
        private route: ActivatedRoute
    ) {}

    categories: any[] = [
        { name: 'Soy Wax Candles', active: false },
        { name: 'Natural Soap', active: false },
        { name: 'Bath Accessories', active: false },
        { name: 'Gift Sets', active: false }
    ];

    prices: any[] = [
        { name: 'Under $10', min: 0, max: 9.99, active: false },
        { name: '$10 - $20', min: 10, max: 20, active: false },
        { name: '$20+', min: 20.01, max: 1000, active: false }
    ];

    dataSource: MatTableDataSource<Item> = new MatTableDataSource<Item>([]);

    items: Item[];

    searchText: string = '';

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngOnInit(): void {
        window.scrollTo(0, 0);

        this.dataSource.data = this.productCatalog.items.slice();
        this.dataSource.paginator = this.paginator;

        /* this is a fucking disaster, but it works */
        this.dataSource.filterPredicate = (data, filter: string) => {
            let filteredItem = false;
            let itemSelected = false;

            this.categories.forEach(category => {
                if (category.active) {
                    itemSelected = true; 
                }
                if (category.active && category.name === data.Category) {
                    filteredItem = true;
                }
            });
            if (!itemSelected) {
                filteredItem = true;
            }
            if (itemSelected && !filteredItem) {
                return false;
            }

            let rightPrice = false;
            itemSelected = false;
            this.prices.forEach(price => {
                if (price.active) {
                    itemSelected = true;
                    if (price.min <= data.Price && price.max >= data.Price) {
                        rightPrice = true;
                    }
                }
            });
            if (!itemSelected) {
                rightPrice = true;
                filteredItem = true;
            }
            if (!rightPrice) {
                filteredItem = false;
            }

            if (this.searchText.length) {
                return data.Name.toLowerCase().includes(this.searchText.toLowerCase()) && filteredItem;
            } else {
                return filteredItem;
            }
        };

        this.route.params.subscribe(params => {
            let param = params['filter']
            if (param) {
                console.log(param);
                this.categories.forEach((category) => {
                    if (category.name === param) {
                        category.active = true;
                    }
                });
                this.filter();
            }
        });
    }
    
    search(): void {
        if (this.searchText.length) {
            this.filter();
        } else {
            this.resetFilter();
        }
    }

    filter(): void {
        this.dataSource.filter = JSON.stringify({});
        this.dataSource.paginator.firstPage();
    }

    checked(filter: any): void {
        filter.active = !filter.active;
        this.filter();
    }

    resetFilter(filterArray: any[] = []): void {
        if (filterArray.length) {
            filterArray.forEach(filter => {
                filter.active = false;
            });
        }

        this.filter();
    }

    sortChanged(sortType: string): void {
        switch (sortType) {
            case '1':
                this.dataSource.data = this.productCatalog.items.slice();
                break;
            case '2':
                this.dataSource.data.sort((a, b) => {
                    return a.Name.localeCompare(b.Name);
                });
                this.refreshDataSource();
                break;
            case '3':
                this.dataSource.data.sort((b, a) => {
                    return a.Name.localeCompare(b.Name);
                });
                this.refreshDataSource();
                break;
            default:
                return;
        }
    }

    refreshDataSource(): void {
        this.dataSource.data = this.dataSource.data.slice();
        this.paginator.firstPage();
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
