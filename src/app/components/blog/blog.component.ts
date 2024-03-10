import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blog: string = ""
  text = "assets/blog/start.md"
  constructor(
    private router: Router,
  ) { }
  ngOnInit(): void {
    // const regex = new RegExp('/blog/\w.*');
    this.router.events.subscribe(() => {
      let r = this.router.url
      if (r.replace("/blog", "") != "") {
        this.blog = r.replace("/blog", "")
        console.log('article')
      } else if (r.replace("/blog/tag/", "") != "") {
        console.log("tag filter")
      } else {
        console.log('current route: ', r)
      }
    })
  }
}
