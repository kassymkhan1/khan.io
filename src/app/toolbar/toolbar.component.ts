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
    { name: "Home" },
    { name: "About" },
    { name: "Blog" },
    { name: "Gear" }
  ]
  constructor(
    private router: Router
  ) { 
      this.router.events.subscribe((event)=>{
        if(event instanceof NavigationStart){
            if (event.url == '/'){
              this.focus = 'home'
              this.router.navigate(['home'])
            }else{
              this.focus = event.url.replace('/','')
            }
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
