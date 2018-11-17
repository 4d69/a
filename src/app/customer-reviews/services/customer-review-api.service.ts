import { Injectable } from '@angular/core';

import { Review } from '../models/review';

const testReviews: Review[] = [
    {
        id: 1,
        productId: 20,
        title: 'Review 1',
        name: 'John D',
        location: 'San Francisco, CA',
        rating: 5,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        id: 2,
        productId: 20,
        title: 'Review 2',
        name: 'Jane D',
        location: 'Palo Alto, CA',
        rating: 3,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
];

@Injectable()
export class CustomerReviewApiService {
    constructor() {
        console.log('init: CustomerReviewApiService');
    }

    getAll(): Review[] {
        return testReviews;
    }

    getById(id: number): Review[] {
        let reviews = [];
        testReviews.forEach(review => {
            if (review.productId === id) {
                reviews.push(review);
            }
        });
        return reviews;
    }

    post(review: Review): void {
        console.log('ProductCatalogApiService.post');
    }
    
    put(): void {
        console.log('ProductCatalogApiService.put');
    }

    delete(): void {
        console.log('ProductCatalogApiService.delete');
    }
}
