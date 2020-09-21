import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Question} from '../models/question';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Quiz} from '../models/quiz';
import {UserAnswer} from '../models/user-answer';
import {AnswerInfo} from '../models/answer-info';
import {QuizResult} from '../models/quiz-result';

@Injectable({
  providedIn: 'root'
})
export class UserQuizService {

  private userQuizUrl = '/api/user-quiz';
  private userAnswerUrl = '/api/user-quiz/answer';
  private randomQuestionUrl = '/api/question/random/';
  private bestResultsLimit = 10;

  constructor(private httpClient: HttpClient) {
  }

  public getRandomQuestion(quizId: string): Observable<Question> {
    return this.httpClient.get<Question>(`${this.randomQuestionUrl}/${quizId}`).pipe(
      map(res => new Question().deserialize(res))
    );
  }

  public startQuiz(): Observable<Quiz> {
    return this.httpClient.get<Quiz>(`${this.userQuizUrl}/start`).pipe(
      map(res => new Quiz().deserialize(res))
    );
  }

  public saveAnswer(userAnswer: UserAnswer): Observable<AnswerInfo> {
    return this.httpClient.post<Observable<AnswerInfo>>(`${this.userAnswerUrl}`, userAnswer).pipe(
      map(res => new AnswerInfo().deserialize(res))
    );
  }

  public getResult(id: string): Observable<QuizResult> {
    return this.httpClient.get<Observable<QuizResult>>(`${this.userQuizUrl}/${id}/result`).pipe(
      map(res => new QuizResult().deserialize(res))
    );
  }

  public getBestResults(): Observable<Quiz[]> {
    return this.httpClient.get<Quiz[]>(`${this.userQuizUrl}/best-results?limit=${this.bestResultsLimit}`).pipe(
      map(res => res.map(data => new Quiz().deserialize(data)))
    );
  }
}
