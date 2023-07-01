import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {}
  github(){
    const username: string = "kassymkhan1"
    const url: string = `https://api.github.com/users/${username}/repos?per_page=100`
    this.http.get(url).subscribe(
      {next: (data:any) => console.log(data)}
    )
  }
  youtube(){}
  blogs(){}
}
