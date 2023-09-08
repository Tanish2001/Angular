import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-movies',
  templateUrl: './display-movies.component.html',
  styleUrls: ['./display-movies.component.css']
})
export class DisplayMoviesComponent {
counter:number=0
color:string=''
@Input("xyz") movieObj:any
@Input("counter") count:number=0
changecolor(){
  if(this.count%2==0){
    this.color="card text-bg-danger mb-3"
    console.log("clicked");
  }
  else{
    this.color="card text-bg-success mb-3"
    console.log("clicked");

  }
}


}
