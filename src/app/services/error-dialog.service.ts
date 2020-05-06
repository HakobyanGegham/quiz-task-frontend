import {Injectable, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ErrorDialogComponent} from '../dialogs/error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorDialogService {

  constructor(private dialog: MatDialog) {
  }

  showMessage(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      width: '300px',
      data: {
        dataKey: errorMessage
      }
    });
  }
}
