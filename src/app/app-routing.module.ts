import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { GearComponent } from './components/gear/gear.component';

const Blogs: Routes = [
  {path: "start", component: BlogComponent}
]
const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "about", component: AboutComponent},
  { path: "gear", component:  GearComponent},
  { path: "blog", component: BlogComponent},
  { path: "blog/:id", component: BlogComponent, children: Blogs}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
