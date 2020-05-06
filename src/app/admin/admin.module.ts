import {NgModule} from '@angular/core';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {QuestionsComponent} from './questions/questions.component';
import {QuestionItemComponent} from './question-item/question-item.component';
import {AddUpdateQuestionComponent} from './add-update-question/add-update-question.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [AdminComponent, QuestionsComponent, QuestionItemComponent, AddUpdateQuestionComponent],
  imports: [
    AdminRoutingModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSliderModule,
    SharedModule
  ]
})
export class AdminModule {
}
