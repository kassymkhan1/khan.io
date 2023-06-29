import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StartComponent } from './start/start.component';
import { BlogComponent } from './components/blog/blog.component';
const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "about", component: StartComponent},
  { path: "gear", component:  StartComponent},
  { path: "blog", component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
