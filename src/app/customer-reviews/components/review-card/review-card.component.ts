import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { CustomerReviewService } from '../../services/customer-review.service';
import { ReportInappropriateComponent } from '../report-inappropriate/report-inappropriate.component';
import { Review } from '../../models/review';

@Component({
    selector: 'review-card',
    templateUrl: './review-card.component.html',
    styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent implements OnInit {
    constructor(
        private dialog: MatDialog,
        private reviewService: CustomerReviewService
    ) { }

    @Input('data') review: Review;

    stars: string[];

    ngOnInit() {
        this.stars = this.reviewService.reviewStarArray(this.review.rating);
    }

    reportInappropriate(): void {
        this.dialog.open(ReportInappropriateComponent, {
            width: '400px',
            autoFocus: false
        });
    }
}
