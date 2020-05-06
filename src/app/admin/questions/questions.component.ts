import {Component, OnInit} from '@angular/core';
import {Question} from '../../models/question';
import {QuestionService} from '../../services/question.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.less']
})
export class QuestionsComponent implements OnInit {

  public questions: Question[];
  public p: number;
  public filteredItems: Observable<any[]>;

  constructor(private questionService: QuestionService) {
  }

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe(questions => {
      this.questions = questions;
      this.filteredItems = of(questions);
    });
  }

  public questionRemoved(id: any) {
    this.filteredItems = of(this.questions.filter(question => question.id !== id));
  }
}
