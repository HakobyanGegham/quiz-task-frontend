import {Component, OnInit} from '@angular/core';
import {UserQuizService} from '../../services/user-quiz.service';
import {Quiz} from '../../models/quiz';
import {User} from '../../models/user';
import {TokenService} from '../../services/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-best-results',
  templateUrl: './best-results.component.html',
  styleUrls: ['./best-results.component.less']
})
export class BestResultsComponent implements OnInit {
  public quizzes: Quiz[];

  constructor(private userQuizService: UserQuizService,
              private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.userQuizService.getBestResults().subscribe(quizzes => {
      this.quizzes = quizzes;
    });
  }

  redirect() {
    const userData = this.tokenService.getUser();
    if (userData) {
      const user = JSON.parse(userData) as User;
      this.router.navigateByUrl(user.role);
    }
  }
}
