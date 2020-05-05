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
  private questionsUrl = '/api/questions';

  constructor(private httpClient: HttpClient) {
  }

  public getQuestion(questionId: number): Observable<Question> {
    return this.httpClient.get<Question>(`${this.questionUrl}/${questionId}`).pipe(
      map(res => new Question().deserialize(res))
    );
  }

  public getQuestions(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(this.questionsUrl).pipe(
      map(res => res.map(data => new Question().deserialize(data)))
    );
  }

  public deleteQuestion(id: number): Observable<string> {
    return this.httpClient.delete<string>(`${this.questionUrl}/${id}`).pipe(
      map(res => res.toString())
    );
  }

  public addQuestion(question: any): Observable<Question> {
    return this.httpClient.post<Question>(this.questionUrl, question).pipe(
      map(res => new Question().deserialize(res))
    );
  }

  public updateQuestion(question: any, id: number): Observable<Question> {
    return this.httpClient.post<Question>(`${this.questionUrl}/${id}`, question).pipe(
      map(res => new Question().deserialize(res))
    );
  }
}
