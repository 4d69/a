
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartService } from './shopping-cart/services/shopping-cart.service';
import { CarouselComponent } from './home-carousel/home-carousel.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatBadgeModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatTableModule,
        MatToolbarModule
    ],
    declarations: [
        AppComponent,
        CarouselComponent,
        ShoppingCartComponent,
        ProductCarouselComponent,
        ProductCardComponent
    ],
    providers: [
        ShoppingCartService
    ],
    entryComponents: [
        ShoppingCartComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
