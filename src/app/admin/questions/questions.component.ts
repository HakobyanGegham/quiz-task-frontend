import {Component, OnInit} from '@angular/core';
import {Question} from '../../models/question';
import {QuestionService} from '../../services/question.service';
import {from, Observable, of} from 'rxjs';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.less']
})
export class QuestionsComponent implements OnInit {

  public questions: Question[];
  public p: number;

  constructor(private questionService: QuestionService) {
  }

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe(questions => {
      this.questions = questions;
    });
  }

}
