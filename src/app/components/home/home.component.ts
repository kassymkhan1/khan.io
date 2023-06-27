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
    description: ""

  }]
  sociales=[
    {name: "github"},
    {name: "youtube"},
    {name: "blogs"}
  ]

}
