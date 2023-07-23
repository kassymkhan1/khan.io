import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Github } from './github';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient,
  ) { }
  github() {
    return this.http.get<Github[]>(`https://api.github.com/users/kassymkhan1/repos?per_page=100`)
  }
  youtube() { }
  blogs() { }

  
}
