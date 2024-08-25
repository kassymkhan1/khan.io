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
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSobj-8Pw04nd4JSrO4qT9_1ui2PWVLf1JnIQ&usqp=CAU",
        Description: 'Base machine for work',
        sponsored: false,
      },
      {
        URL: 'apple',
        Name: 'Ipad Pro 11',
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxRLlzogCRG_bdmmtPDkfMemdXtU95gwccHw&usqp=CAU",
        Description: 'My watch device',
        sponsored: false,
      },
    ];
    return devices;
  }

  Softs() {
    let softwares = [
      {
        URL: 'https://astronvim.com/',
        Name: 'Nvim',
        Image: "https://astronvim.com/_astro/astrodark.CdHFd1a7_eiWC4.webp",
        Description: 'My best IDE',
      },
      {
        URL: 'https://linear.app',
        Name: 'Linear',
        Image: "https://linear.app/static/og/home.jpg",
        Description: 'My productive app',
      },
      {
        URL: 'https://slack.com',
        Name: 'Slack',
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwZ0xsTd-O1JdW3HAvp6m8jHcSnp1QQ_Nw7Q&usqp=CAU",
        Description: 'Communication Application',
      }
    ];

    return softwares;
  }
}
