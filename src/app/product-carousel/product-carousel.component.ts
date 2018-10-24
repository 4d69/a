import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'product-carousel',
    templateUrl: './product-carousel.component.html',
    styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent implements OnInit {
    constructor() { }

    title: string = 'Products';

    ngOnInit() {
    }

}
