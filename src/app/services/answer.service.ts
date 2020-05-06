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

  constructor(private httpClient: HttpClient) {
  }

  public deleteAnswer(id: number): Observable<string> {
    return this.httpClient.delete<string>(`${this.answerUrl}/${id}`).pipe(
      map(res => res.toString())
    );
  }
}
