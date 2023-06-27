import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  focus: string = "";
  navigates = [
    { name: "Home" },
    { name: "About" },
    { name: "Blog" },
    { name: "Gear" }
  ]
  constructor(
    private router: Router
  ) { }
  ngOnInit(): void {
    if (this.focus == '') {
      const page = sessionStorage.getItem('navigate')
      this.focus = page != null ? page : 'home'
    }
  }
  Router(navigate: any) {
    sessionStorage.setItem('navigate', navigate.name)
    this.focus = navigate.name
    // this.router.navigate(["home"])
    this.router.navigate([navigate.name.toLowerCase()])
  }
}
