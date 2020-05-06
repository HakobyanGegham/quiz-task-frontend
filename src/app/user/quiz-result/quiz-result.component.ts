import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserQuizService} from '../../services/user-quiz.service';
import {QuizResult} from '../../models/quiz-result';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.less']
})
export class QuizResultComponent implements OnInit {
  public quizResult: QuizResult;

  constructor(private route: ActivatedRoute,
              private userQuizService: UserQuizService) {
  }

  ngOnInit(): void {
    const quizId = this.route.snapshot.paramMap.get('quizId');
    if (quizId) {
      this.userQuizService.getResult(+quizId).subscribe(quizResult => {
        this.quizResult = quizResult;
      });
    }
  }
}
