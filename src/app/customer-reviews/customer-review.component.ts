import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { CustomerReviewService } from './services/customer-review.service';
import { WriteReviewComponent } from './components/write-review/write-review.component';

@Component({
    selector: 'customer-reviews',
    templateUrl: './customer-review.component.html',
    styleUrls: ['./customer-review.component.css']
})
export class CustomerReviewsComponent {
    constructor(private dialog: MatDialog) { }

    @Input('service') reviewsService: CustomerReviewService;

    writeReview(): void {
        this.dialog.open(WriteReviewComponent, {
            width: '400px',
            autoFocus: false
        });
    }
}
