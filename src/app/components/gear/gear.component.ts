import { Component } from '@angular/core';

@Component({
  selector: 'app-gear',
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.scss']
})
export class GearComponent {
  devices = [{
    URL: "apple",
    Name: "Macbook Pro 14",
    Description: "Описание",
    sponsored: false
  }]
  softwares = [{
    URL: "apple",
    Name: "Macbook Pro 14",
    Description: "Описание"
  }]
}
