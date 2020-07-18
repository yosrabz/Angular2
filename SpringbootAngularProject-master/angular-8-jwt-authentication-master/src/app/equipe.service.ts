import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  private baseUrl = 'http://localhost:8080/api/equipes';

  constructor(private http: HttpClient) { }

  getEquipe(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEquipe(equipe: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, equipe);
  }

  updateEquipe(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEquipe(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEquipesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}

