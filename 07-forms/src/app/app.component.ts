import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '07-forms';
  studentList:any[]=[]
  printData(val:any){
    this.studentList.push(val)
    console.log(this.studentList);
    console.log(this.studentList[0]);
  }
















}


