import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  GithubStars: number = 0;
  github: any;
  blogs = [{
    date: "",
    description: "Description",
    path: "assets/blogs/start.md"
  }]
  github_url: string = "https://github.com/kassymkhan1"
  youtube_url: string = "https://www.youtube.com/channel/UCwQgVeAPJORKHc3uK3_JjZw"
  sociales = [
    { name: "Total Blog Views", path: "/blog" },
  ]
  ngOnInit(): void {
  }
  constructor(
    private api: ApiService
  ) {
    this.github = this.api.github().subscribe((response)=>{
      response.forEach((element) => {
        if (element.stargazers_count){
        this.GithubStars += element.stargazers_count
        }
      });
    })
  }
  onDestroy(): void{
    this.github.destroy()
  }
}
