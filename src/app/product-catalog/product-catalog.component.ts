import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource, MatCheckboxChange } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { Item } from './item';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductCatalogService } from './product-catalog.service';
import { FormBuilder } from '@angular/forms';

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
        private formBuilder: FormBuilder,
        private productCatalog: ProductCatalogService,
        private route: ActivatedRoute
    ) {}

    dataSource: MatTableDataSource<Item> = new MatTableDataSource<Item>([]);

    items: Item[];

    searchText: string = '';

    categoryFilter: string[] = [];

    priceFilter: string[] = [];

    categoryFilterForm: any;

    priceFilterForm: any;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngOnInit(): void {
        window.scrollTo(0, 0);

        this.dataSource.data = this.productCatalog.items.slice();

        this.dataSource.paginator = this.paginator;

        this.dataSource.filterPredicate = (data, filter: string) => {
            let obj = JSON.parse(filter);
            let con = false;

            if (obj.categories && obj.categories.includes(data.Category.toString())) {
                con = true;
            }
            if (obj.price && (obj.prices.includes(data.Price.toString()))) {
                con = true;
            }
            if (obj.categories && !obj.categories.length) {
                con = true;
            }

            if (obj.text.length) {
                return data.Name.toLowerCase().includes(obj.text.toLowerCase()) && con;
            } else {
                return con;
            }

            // return obj.categories.includes(data.Category.toString()) ||
            //        obj.prices.includes(data.Price.toString()) ||
            //        data.Name.includes(obj.text) ||
            //        !obj.categories.length;
        };



        
        // redo
        this.route.params.subscribe(params => {
            let param = params['filter']
            if (param) {
                this.categoryFilter.push(param);
                this.filter();
            }
        });




        this.categoryFilterForm = this.formBuilder.group({
            'category1': ['', []],
            'category2': ['', []],
            'category3': ['', []],
            'category4': ['', []]
        });

        this.priceFilterForm = this.formBuilder.group({
            'price1': ['', []],
            'price2': ['', []],
            'price3': ['', []]
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
        this.dataSource.filter = JSON.stringify(this.generateFilterObject());
        this.dataSource.paginator.firstPage();
    }

    generateFilterObject(): any {
        return {
            categories: this.categoryFilter,
            prices: this.priceFilter,
            text: this.searchText
        };
    }

    checked(filterArray: string, filter: string, event: MatCheckboxChange): void {
        if (event.checked) {
            this.addFilter(filter, this[filterArray]);
        } else {
            this.removeFilter(filter, this[filterArray]);
        }
        this.filter();
    }

    addFilter(filter: string, filterArray: string[]): void {
        if (!filterArray.includes(filter)) {
            filterArray.push(filter);
        }
    }

    removeFilter(filter: string, filterArray: string[]): void {
        if (filterArray.includes(filter)) {
            filterArray.splice(filterArray.indexOf(filter), 1);
        }
    }

    resetFilter(filterArray: string = ''): void {
        if (filterArray.length) {
            this[filterArray] = [];
        }
        console.log(this[filterArray]);

        let obj = this.generateFilterObject();

        if (obj.categories.length || obj.prices.length || obj.text.length) {
            this.filter();
        } else {
            this.dataSource.filter = '';
            this.dataSource.paginator.firstPage();
        }
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
