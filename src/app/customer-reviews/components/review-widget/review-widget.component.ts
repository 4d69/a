import { Component, Input, OnInit } from '@angular/core';

import { CustomerReviewService } from '../../services/customer-review.service';

@Component({
    selector: 'review-widget',
    templateUrl: './review-widget.component.html',
    styleUrls: ['./review-widget.component.css']
})
export class ReviewWidgetComponent implements OnInit {
    constructor() { }

    @Input('service') reviewsService: CustomerReviewService;

    stars: string[];

    ngOnInit() {
        let rating = this.reviewsService.getOverallRating();
        this.stars = this.reviewsService.reviewStarArray(rating);
    }
}
