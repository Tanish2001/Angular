import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-movies',
  templateUrl: './input-movies.component.html',
  styleUrls: ['./input-movies.component.css']
})
export class InputMoviesComponent {
  @Output() outMovie = new EventEmitter<string>();
  @Output() outMovieDes = new EventEmitter<string>()

  submit(movieName:string,dec:string){
    this.outMovie.emit(movieName)
    this.outMovieDes.emit(dec)
  }
}
