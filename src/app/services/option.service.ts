import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OptionService {
  private answerUrl = '/api/answer';

  constructor(private httpClient: HttpClient) {
  }

  public deleteOption(id: string): Observable<string> {
    return this.httpClient.delete<string>(`${this.answerUrl}/${id}`).pipe(
      map(res => res.toString())
    );
  }
}
