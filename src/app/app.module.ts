// framework/library imports
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
// app modules
import { CustomerReviewModule } from './customer-reviews/customer-review.module';
// app components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home-component/home-component.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';
import { ProductCarouselService } from './components/product-carousel/product-carousel.service';
import { ProductCatalogComponent } from './pages/product-catalog/product-catalog.component';
import { ProductCatalogService } from './services/product-catalog.service';
import { ProductCatalogApiService } from './services/product-catalog-api.service';
import { ProductNavigationComponent } from './components/product-navigation/product-navigation.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { ShoppingCartService } from './services/shopping-cart.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'product-catalog', component: ProductCatalogComponent },
    { path: 'product-catalog/:filter', component: ProductCatalogComponent },
    { path: 'product-page/:id', component: ProductPageComponent },
    { path: 'shopping-cart', component: ShoppingCartComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatBadgeModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatSelectModule,
        MatSnackBarModule,
        MatTableModule,
        MatToolbarModule,
        RouterModule.forRoot(
            appRoutes
        ),
        CustomerReviewModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        PageNotFoundComponent,
        ProductCardComponent,
        ProductCarouselComponent,
        ProductCatalogComponent,
        ProductNavigationComponent,
        ProductPageComponent,
        ShoppingCartComponent
    ],
    providers: [
        ProductCarouselService,
        ProductCatalogService,
        ProductCatalogApiService,
        ShoppingCartService
    ],
    entryComponents: [
        ProductCardComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
