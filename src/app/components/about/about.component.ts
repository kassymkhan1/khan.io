import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor() { }
  ngOnInit(): void { }
   
  imgCollection: Array<object> = [
      // {
      //   image: 'https://loremflickr.com/g/600/400/paris',
      //   thumbImage: 'https://loremflickr.com/g/1200/800/paris',
      //   alt: 'Image 1',
      //   title: 'Image 1'
      // } 
  ];
}
