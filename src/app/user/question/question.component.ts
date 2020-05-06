import {Component, ElementRef, Input, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren} from '@angular/core';
import {Question} from '../../models/question';
import {Quiz} from '../../models/quiz';
import {UserQuizService} from '../../services/user-quiz.service';
import {Observable, of} from 'rxjs';
import {UserAnswer} from '../../models/user-answer';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.less']
})
export class QuestionComponent implements OnInit, OnChanges {
  @Input() quiz: Quiz;
  public question: Question;
  public notChosenAnswer: Observable<any>;
  @ViewChildren('answers') answers: QueryList<ElementRef>;

  constructor(private userQuizService: UserQuizService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.quiz.currentValue) {
      this.quiz = changes.quiz.currentValue;
      this.userQuizService.getRandomQuestion(+this.quiz.id).subscribe((question) => {
        this.question = question;
      });
    }
  }

  public chooseAnswer(id) {
    this.notChosenAnswer = of(false);
    this.answers.forEach(answer => {
      answer.nativeElement.classList.remove('active');
      if (+answer.nativeElement.id === id) {
        answer.nativeElement.classList.add('active');
      }
    });
  }

  private getChosenAnswer() {
    return this.answers.find(answer => {
      return answer.nativeElement.classList.contains('active');
    });
  }

  saveAnswer() {
    const chosenAnswer = this.getChosenAnswer();
    if (!chosenAnswer) {
      this.notChosenAnswer = of(true);
    } else {
      const userAnswer = new UserAnswer();
      userAnswer.answerId = +chosenAnswer.nativeElement.id;
      userAnswer.questionId = this.question.id;
      userAnswer.quizId = this.quiz.id;
      this.userQuizService.saveAnswer(userAnswer).subscribe();
    }
  }
}
