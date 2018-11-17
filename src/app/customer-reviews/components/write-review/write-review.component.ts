import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { CustomerReviewService } from '../../services/customer-review.service';
import { Review } from '../../models/review';

@Component({
    selector: 'write-review',
    templateUrl: './write-review.component.html',
    styleUrls: ['./write-review.component.css']
})
export class WriteReviewComponent implements OnInit {
    constructor(
        private dialogRef: MatDialogRef<WriteReviewComponent>,
        private reviewService: CustomerReviewService
    ) { }

    review: Review = new Review();

    reviewStars: string[];

    ngOnInit() {
        this.updateReviewStars();
    }

    updateRating(rating: number): void {
        this.review.rating = rating;
        this.updateReviewStars();
    }

    updateReviewStars(): void {
        this.reviewStars = this.reviewService.reviewStarArray(this.review.rating);
    }

    submit(): void {
        this.reviewService.postReview(this.review);
        this.dialogRef.close();
    }

    cancel(): void {
        this.dialogRef.close();
    }
}
