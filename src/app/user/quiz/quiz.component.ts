import {Component, OnInit} from '@angular/core';
import {Question} from '../../models/question';
import {UserQuizService} from '../../services/user-quiz.service';
import {Quiz} from '../../models/quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.less']
})
export class QuizComponent implements OnInit {

  public quiz: Quiz;

  constructor(private userQuizService: UserQuizService) {
  }

  ngOnInit(): void {
    this.userQuizService.startQuiz().subscribe((quiz) => {
      this.quiz = quiz;
    });
  }

}
