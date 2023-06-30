import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  Name: string = "Kassymhan Kazlhan"
  activete: string = "I write code and make videos."
  github_start: number = 0
  blogs = [{
    date: "Test",
    path: "",
    description: "test"

  }]
  github_url: string = "https://github.com/kassymkhan1"
  youtube_url: string = "https://www.youtube.com/channel/UCwQgVeAPJORKHc3uK3_JjZw"
  sociales = [
    { name: "Blogs", path: "/blog" },
  ]
  ngOnInit(): void {
  }
  constructor(
  ) { }
  async github() {
    try {
      const username: string = "kassymkhan1"
      const url: string = `https://api.github.com/users/${username}/repos?per_page=100`
      const response = await fetch(url);
      const data = await response.json();
      const stars = data.reduce(
        (acc: number, curr: { stargazers_count: number }) =>
          acc + curr.stargazers_count,
        0
      );
      return stars;
    } catch (err) {

    }
  }
  async view_blog() {
  }
  async subcription_youtube() { }
}
