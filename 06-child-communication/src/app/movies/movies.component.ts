import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
movieList:any[]=[]
text=''
text1=''

  getMovies(val:string){
    this.text=val
  }
  getMovieDes(val:string){
    this.text1=val
    this.movieList.push({name:this.text,description:this.text1})
    // console.log("object");
  }






}
