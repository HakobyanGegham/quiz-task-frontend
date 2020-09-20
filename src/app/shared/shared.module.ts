import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BestResultsComponent} from '../components/best-results/best-results.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ErrorDialogComponent} from '../dialogs/error-dialog/error-dialog.component';
import {SuccessDialogComponent} from '../dialogs/success-dialog/success-dialog.component';
import {InfoDialogComponent} from '../dialogs/info-dialog/info-dialog.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    BestResultsComponent,
    ErrorDialogComponent,
    SuccessDialogComponent,
    InfoDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    RouterModule,
  ],
  exports: [
    BestResultsComponent,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    BestResultsComponent,
    ErrorDialogComponent,
    SuccessDialogComponent,
    InfoDialogComponent,
    CommonModule
  ]
})
export class SharedModule {
}
