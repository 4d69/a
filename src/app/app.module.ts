
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { 
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartService } from './shopping-cart/services/shopping-cart.service';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatTableModule,
        MatToolbarModule
    ],
    declarations: [
        AppComponent,
        CarouselComponent,
        ShoppingCartComponent
    ],
    providers: [
        ShoppingCartService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
