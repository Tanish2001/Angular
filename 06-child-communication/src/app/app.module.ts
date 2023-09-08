import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { MoviesComponent } from './movies/movies.component';
import { InputMoviesComponent } from './input-movies/input-movies.component';
import { DisplayMoviesComponent } from './display-movies/display-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    MoviesComponent,
    InputMoviesComponent,
    DisplayMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
