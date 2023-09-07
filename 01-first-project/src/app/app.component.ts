import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01-first-project';
  // string interpolation
  name = "Tanish"
  // property binding
  linkURL = "http://www.google.com"
  counter:number=0

  inputValue:any;

  incrementCounter(){
    if(this.counter<10){
      this.counter++
    }
  }

  decrementCounter(){
    if(this.counter>0){
      this.counter--
    }
  }

  btnRef:HTMLElement=document.getElementById("btn1")as HTMLElement
  
  constructor(){
    console.log(this.btnRef);
  }
}
