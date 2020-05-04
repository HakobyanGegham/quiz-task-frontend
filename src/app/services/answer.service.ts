import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Answer} from '../models/answer';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private answerUrl = '/api/answer';
  private answersUrl = '/api/answer';

  constructor(private httpClient: HttpClient) {
  }

  public getAnswer(): Observable<Answer> {
    return this.httpClient.get<Answer>(this.answerUrl).pipe(
      map(res => new Answer().deserialize(res))
    );
  }

  public getAnswers(): Observable<Answer[]> {
    return this.httpClient.get<Answer[]>(this.answersUrl).pipe(
      map(res => res.map(data => new Answer().deserialize(data)))
    );
  }

  public deleteAnswer(id: number): Observable<string> {
    return this.httpClient.delete<string>(`${this.answerUrl}/${id}`).pipe(
      map(res => res.toString())
    );
  }

  public addAnswer(question: any): Observable<Answer> {
    return this.httpClient.post<Answer>(this.answerUrl, question).pipe(
      map(res => new Answer().deserialize(res))
    );
  }

  public updateAnswer(question: any, id: number): Observable<Answer> {
    return this.httpClient.post<Answer>(`${this.answerUrl}/${id}`, question).pipe(
      map(res => new Answer().deserialize(res))
    );
  }
}
