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


@NgModule({
  declarations: [AdminComponent, QuestionsComponent, QuestionItemComponent, AddUpdateQuestionComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule
  ]
})
export class AdminModule {
}
