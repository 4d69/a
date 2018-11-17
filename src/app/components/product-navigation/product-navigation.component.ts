import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'product-navigation',
    templateUrl: './product-navigation.component.html',
    styleUrls: ['./product-navigation.component.css']
})
export class ProductNavigationComponent implements OnInit {
    constructor() { }

    @Input('toggled') toggled: boolean = false;

    sections = [
        { Active: true },
        { Active: false },
        { Active: false },
        { Active: false },
        { Active: false },
    ]

    ngOnInit() {
    }

    activate(num: number) {
        this.sections.forEach(section => {
            section.Active = false;
        });
        this.sections[num].Active = true;
    }
}
