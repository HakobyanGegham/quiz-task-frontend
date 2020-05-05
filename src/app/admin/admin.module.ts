import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {QuestionsComponent} from './questions/questions.component';
import {QuestionItemComponent} from './question-item/question-item.component';
import {AddUpdateQuestionComponent} from './add-update-question/add-update-question.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {NgxPaginationModule} from 'ngx-pagination';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';



@NgModule({
  declarations: [AdminComponent, QuestionsComponent, QuestionItemComponent, AddUpdateQuestionComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSliderModule
  ]
})
export class AdminModule {
}
