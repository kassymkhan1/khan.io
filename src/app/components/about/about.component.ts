import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  abouts = [
    {
      title: "About",
      description: `
        <p>
        Hello world, I'm Kalzhan Kassymkhan!</p><br>
        <p>
        I'm a DevOps engineer currently working at international company. I have a passion for programming and am always looking for ways to incorporate it into my work.</p><br>
        <p>
        In addition to coding, I also make YouTube videos, where I focus on tech, creative vlogs, and personal development.<br>
        </p>
    `
    },
    {
      title: "Connect",
      description: `
         Have a question or just want to chat? Feel free to email me. Try finding me anywhere else at @kassymmkhan24
    `
    },
    {
      title: "Work",
      description: `
      <p>3+ years of professional devops experience.</p><br>
      <p>I started my career in university. Then I worked at a few small local companies.</p>
    `
    }
  ]
}
