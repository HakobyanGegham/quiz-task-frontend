import {Component, OnInit} from '@angular/core';
import {User} from './models/user';
import {TokenService} from './services/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'quiz-task-frontend';
}
