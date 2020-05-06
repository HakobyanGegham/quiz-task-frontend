import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './user.component';
import {QuizComponent} from './quiz/quiz.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
