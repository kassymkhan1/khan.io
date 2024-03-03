import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GearComponent } from './components/gear/gear.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { StartComponent } from './components/start/start.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './components/blog/blog.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MarkdownModule } from 'ngx-markdown';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GearComponent,
    ToolbarComponent,
    StartComponent,
    BlogComponent,
    ProjectsComponent

  ],
  imports: [
    MarkdownModule.forChild(),
    MarkdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
