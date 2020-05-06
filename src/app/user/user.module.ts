import {NgModule} from '@angular/core';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';
import {QuizComponent} from './quiz/quiz.component';
import {AnswerComponent} from './answer/answer.component';
import {QuestionComponent} from './question/question.component';
import {QuizResultComponent} from './quiz-result/quiz-result.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [UserComponent, QuizComponent, AnswerComponent, QuestionComponent, QuizResultComponent],
  imports: [
    UserRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class UserModule {
}
