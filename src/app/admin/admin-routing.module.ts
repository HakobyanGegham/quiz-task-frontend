import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AdminComponent} from './admin.component';
import {AddUpdateQuestionComponent} from './add-update-question/add-update-question.component';
import {QuestionsComponent} from './questions/questions.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'question',
        component: QuestionsComponent
      },
      {
        path: 'question/edit',
        component: AddUpdateQuestionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
