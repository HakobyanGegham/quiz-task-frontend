import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Question} from '../models/question';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private questionUrl = '/api/question';

  constructor(private httpClient: HttpClient) {
  }

  public getQuestion(questionId: string): Observable<Question> {
    return this.httpClient.get<Question>(`${this.questionUrl}/${questionId}`).pipe(
      map(res => new Question().deserialize(res))
    );
  }

  public getQuestions(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(this.questionUrl).pipe(
      map(res => res.map(data => new Question().deserialize(data)))
    );
  }

  public deleteQuestion(id: string): Observable<Question> {
    return this.httpClient.delete<Question>(`${this.questionUrl}/${id}`).pipe(
      map(res => new Question().deserialize(res))
    );
  }

  public addQuestion(question: any): Observable<Question> {
    return this.httpClient.post<Question>(this.questionUrl, question).pipe(
      map(res => new Question().deserialize(res))
    );
  }

  public updateQuestion(question: any, id: string): Observable<Question> {
    return this.httpClient.post<Question>(`${this.questionUrl}/${id}`, question).pipe(
      map(res => new Question().deserialize(res))
    );
  }
}
