import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GearService {
  constructor() { }

  Techs() {
    let devices = [
      {
        URL: 'apple',
        Name: 'Macbook Pro 14',
        Description: 'Base machine for work',
        sponsored: false,
      },
    ];
    return devices;
  }

  Softs() {
    let softwares = [
      {
        URL: 'apple',
        Name: 'Macbook Pro 14',
        Description: 'Описание',
      },
    ];

    return softwares;
  }
}
