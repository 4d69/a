import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'product-search',
    templateUrl: './product-search.component.html',
    styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
    constructor() { }

    @Input('toggled') toggled:boolean = false;

    ngOnInit() {
    }
}
