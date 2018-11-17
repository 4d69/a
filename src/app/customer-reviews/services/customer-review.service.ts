import { Injectable } from '@angular/core';

import { CustomerReviewApiService } from './customer-review-api.service';
import { Review } from '../models/review';

@Injectable()
export class CustomerReviewService {
    constructor(private customerReviewApiService: CustomerReviewApiService) { }

    reviews: Review[] = [];

    getReviews(itemId: number): void {
       this.reviews = this.customerReviewApiService.getById(itemId);
    }

    postReview(review: Review): void {
        this.reviews.push(review);
        this.customerReviewApiService.post(review);
    }

    getOverallRating(): number {       
        let rating = 0;

        this.reviews.forEach((review: Review) => {
            rating += review.rating;
        });

        // round to nearest .5
        rating = Number((Math.round(rating / this.reviews.length * 2) / 2).toFixed(1));

        return rating;
    }

    reviewStarArray(rating: number): string[] {
        if (!rating) {
            rating = 0;
        }
        let array = Array(Math.floor(rating)).fill('star');
        if (rating % 1 !== 0) {
            array.push('star_half');
        }
        while (array.length < 5) {
            array.push('star_bordered');
        }

        return array;
    }
}
