import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PostResponse } from 'src/app/shared/models/post-response';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(private http: HttpClient) { }

  public getPostbyId(): Observable<PostResponse> {
    return this.http.get<PostResponse>('https://domain.com/posts/123')
  }

  public getAllPost(): Observable<PostResponse> {
    return this.http.get<PostResponse>('https://domain.com/posts')
  }
}
