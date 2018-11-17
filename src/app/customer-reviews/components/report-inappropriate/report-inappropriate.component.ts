import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'report-inappropriate',
  templateUrl: './report-inappropriate.component.html',
  styleUrls: ['./report-inappropriate.component.css']
})
export class ReportInappropriateComponent {
    constructor(private dialogRef: MatDialogRef<ReportInappropriateComponent>) { }
}
