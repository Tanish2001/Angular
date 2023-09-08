import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = '06-child-communication';
  dataVal = 10

  textval=''

  printdata(val:string){
    this.textval=val
  }
}
