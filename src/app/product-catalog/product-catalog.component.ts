import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { Item } from './item';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductCatalogService } from './product-catalog.service';

declare var window;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'product-catalog',
    templateUrl: './product-catalog.component.html',
    styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {
    constructor(
        private dialog: MatDialog,
        private productCatalog: ProductCatalogService,
        private route: ActivatedRoute
    ) {}

    dataSource: MatTableDataSource<Item> = new MatTableDataSource<Item>([]);

    items: Item[];

    filter: number = 0;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngOnInit(): void {
        window.scrollTo(0, 0);

        this.dataSource.data = this.productCatalog.items.slice();

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
    }

    filterChanged(category: string): void {
        this.dataSource.filter = category;
        this.dataSource.paginator.firstPage();
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
