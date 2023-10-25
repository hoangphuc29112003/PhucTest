import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const endpoint = 'api/products';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  getAllPosts(): Observable<any> {
    return this.http.get(endpoint);
  }
}
