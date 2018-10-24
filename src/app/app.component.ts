import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private dialog: MatDialog) {}

    title = 'app';

    isSearching: boolean = false;

    openDialog(): void {
        const dialogRef = this.dialog.open(ShoppingCartComponent, {
            width: '980px',
            height: '700px'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
