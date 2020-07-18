import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private baseUrl = 'http://localhost:8080/api/matchs';


  constructor(private http: HttpClient) { }

  getMatch(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createMatch(match: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, match);
  }

  updateMatch(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteMatch(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getMatchsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
 
}

