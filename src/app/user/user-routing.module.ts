import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './user.component';
import {QuizComponent} from './quiz/quiz.component';
import {QuizResultComponent} from './quiz-result/quiz-result.component';
import {AuthGuardService} from '../services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    canActivate: [AuthGuardService],
    data: {roles: ['user']},
    children: [
      {
        path: 'quiz',
        component: QuizComponent,
      },
      {
        path: 'quiz/result/:quizId',
        component: QuizResultComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
