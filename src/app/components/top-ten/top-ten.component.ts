import {Component, OnInit} from '@angular/core';
import {UserQuizService} from '../../services/user-quiz.service';
import {Quiz} from '../../models/quiz';
import {User} from '../../models/user';
import {TokenService} from '../../services/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-ten',
  templateUrl: './top-ten.component.html',
  styleUrls: ['./top-ten.component.less']
})
export class TopTenComponent implements OnInit {
  public quizzes: Quiz[];

  constructor(private userQuizService: UserQuizService,
              private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.userQuizService.getTopTenQuizzes().subscribe(quizzes => {
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
