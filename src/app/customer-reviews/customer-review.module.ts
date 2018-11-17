// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';
// app
import { CustomerReviewsComponent } from './customer-review.component';
import { CustomerReviewService } from './services/customer-review.service';
import { CustomerReviewApiService } from './services/customer-review-api.service';
import { ReportInappropriateComponent } from './components/report-inappropriate/report-inappropriate.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { ReviewWidgetComponent } from './components/review-widget/review-widget.component';
import { WriteReviewComponent } from './components/write-review/write-review.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule
    ],
    declarations: [
        CustomerReviewsComponent,
        ReportInappropriateComponent,
        ReviewCardComponent,
        ReviewWidgetComponent,
        WriteReviewComponent
    ],
    providers: [
        CustomerReviewService,
        CustomerReviewApiService
    ],
    entryComponents: [
        ReportInappropriateComponent,
        WriteReviewComponent
    ],
    exports: [
        CustomerReviewsComponent,
        ReviewWidgetComponent
    ]
})
export class CustomerReviewModule { }
