import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Question} from '../../models/question';
import {QuestionService} from '../../services/question.service';
import {SuccessDialogComponent} from '../../dialogs/success-dialog/success-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.less']
})
export class QuestionItemComponent implements OnInit, OnChanges {
  @Input() question: Question;
  @Output() removed = new EventEmitter();

  constructor(private questionService: QuestionService,
              private dialog: MatDialog,) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.question.currentValue) {
      this.question = changes.question.currentValue;
    }
  }

  public deleteQuestion() {
    this.questionService.deleteQuestion(+this.question.id).subscribe((question) => {
      this.removed.emit(question.id);
      this.dialog.open(SuccessDialogComponent, {
        width: '300px',
        data: {
          dataKey: 'Question has been successfully removed.'
        }
      });
    });
  }
}
