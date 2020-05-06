import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopTenComponent} from '../components/top-ten/top-ten.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ErrorDialogComponent} from '../dialogs/error-dialog/error-dialog.component';
import {SuccessDialogComponent} from '../dialogs/success-dialog/success-dialog.component';
import {ConfirmDialogComponent} from '../dialogs/confirm-dialog/confirm-dialog.component';
import {InfoDialogComponent} from '../dialogs/info-dialog/info-dialog.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    TopTenComponent,
    ErrorDialogComponent,
    SuccessDialogComponent,
    ConfirmDialogComponent,
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
    TopTenComponent,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    TopTenComponent,
    ErrorDialogComponent,
    SuccessDialogComponent,
    ConfirmDialogComponent,
    InfoDialogComponent,
    CommonModule
  ]
})
export class SharedModule {
}
