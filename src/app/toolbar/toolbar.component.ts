import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  focus = 'home';
  dropMenu = false;
  navigates = [
    { name: "About" },
    { name: "Blog" },
    { name: "Projects"},
    { name: "Gear" }
  ]
  constructor(
    private router: Router
  ) { 
      this.router.events.subscribe((event)=>{
        if(event instanceof NavigationStart){
            this.focus = event.url.replace('/','')
        }    
      }
    )
  }
  Router(navigate: string) {
    this.focus = navigate
    this.router.navigate([navigate.toLowerCase()])
  }
  DropMenu(){
      this.dropMenu = !this.dropMenu;
  }
}
