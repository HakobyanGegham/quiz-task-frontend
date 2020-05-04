import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Question} from '../../models/question';
import {QuestionService} from '../../services/question.service';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.less']
})
export class QuestionItemComponent implements OnInit, OnChanges {
  @Input() question: Question;

  constructor(private questionService: QuestionService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.question.currentValue) {
      this.question = changes.question.currentValue;
    }
  }

  public deleteQuestion() {
    this.questionService.deleteQuestion(+this.question.id).subscribe();
  }
}
