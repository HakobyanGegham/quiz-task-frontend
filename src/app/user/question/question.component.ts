import {Component, ElementRef, Input, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren} from '@angular/core';
import {Question} from '../../models/question';
import {Quiz} from '../../models/quiz';
import {UserQuizService} from '../../services/user-quiz.service';
import {Observable, of} from 'rxjs';
import {UserAnswer} from '../../models/user-answer';
import {MatDialog} from '@angular/material/dialog';
import {AnswerInfo} from '../../models/answer-info';
import {InfoDialogComponent} from '../../dialogs/info-dialog/info-dialog.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.less']
})
export class QuestionComponent implements OnInit, OnChanges {
  @Input() quiz: Quiz;
  public question: Question;
  public notChosenAnswer: Observable<any>;
  @ViewChildren('options') options: QueryList<ElementRef>;

  constructor(private userQuizService: UserQuizService,
              private dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.quiz.currentValue) {
      this.quiz = changes.quiz.currentValue;
      this.userQuizService.getRandomQuestion(this.quiz._id).subscribe((question) => {
        this.question = question;
      });
    }
  }

  public chooseAnswer(id) {
    this.notChosenAnswer = of(false);
    this.options.forEach(option => {
      option.nativeElement.classList.remove('active');
      if (option.nativeElement.id === id) {
        option.nativeElement.classList.add('active');
      }
    });
  }

  private getChosenAnswer() {
    return this.options.find(option => {
      return option.nativeElement.classList.contains('active');
    });
  }

  saveAnswer() {
    const chosenAnswer = this.getChosenAnswer();
    if (!chosenAnswer) {
      this.notChosenAnswer = of(true);
    } else {
      const userAnswer = new UserAnswer();
      userAnswer.answerId = chosenAnswer.nativeElement.id;
      userAnswer.questionId = this.question._id;
      userAnswer.quizId = this.quiz._id;
      this.userQuizService.saveAnswer(userAnswer).subscribe(answerInfo => {
        this.showInfoDialog(answerInfo);
        if (!answerInfo.isComplete) {
          this.question = answerInfo.question;
        } else {
          this.router.navigateByUrl(`/user/quiz/result/${this.quiz._id}`);
        }
      });
    }
  }

  private showInfoDialog(answerInfo: AnswerInfo) {
    this.dialog.open(InfoDialogComponent, {
      width: '300px',
      data: {
        dataKey: answerInfo.message
      }
    });
  }
}
