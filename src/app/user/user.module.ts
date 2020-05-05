import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { QuizComponent } from './quiz/quiz.component';
import { AnswerComponent } from './answer/answer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [UserComponent, QuizComponent, AnswerComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class UserModule { }
