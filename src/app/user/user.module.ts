import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { QuizComponent } from './quiz/quiz.component';
import { AnswerComponent } from './answer/answer.component';


@NgModule({
  declarations: [UserComponent, QuizComponent, AnswerComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
