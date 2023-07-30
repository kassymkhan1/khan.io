import { Component } from '@angular/core';
import { GearService } from 'src/app/services/gear.service';
@Component({
  selector: 'app-gear',
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.scss']
})
export class GearComponent {
  constructor(
    public gear: GearService
  ) { }
}
