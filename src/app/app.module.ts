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
    MatTableModule,
    MatToolbarModule
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home-component/home-component.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { ProductCatalogService } from './product-catalog/product-catalog.service';
import { ProductNavigationComponent } from './product-navigation/product-navigation.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'product-catalog', component: ProductCatalogComponent },
    { path: 'product-catalog/:filter', component: ProductCatalogComponent },
    { path: 'shopping-cart', component: ShoppingCartComponent },
    //{ path: '**', component: PageNotFoundComponent }
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
        MatTableModule,
        MatToolbarModule,
        RouterModule.forRoot(
            appRoutes
        )
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ProductCardComponent,
        ProductCarouselComponent,
        ProductCatalogComponent,
        ProductNavigationComponent,
        ShoppingCartComponent
    ],
    providers: [
        ProductCatalogService,
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
