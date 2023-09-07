import { Component,OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  todos:Todo[]=[];
  constructor() {
    this.todos=[
      {
        serialNumber: 1,
        title:"slep",
        description:"slep",
        completed:false
      },      {
        serialNumber: 2,
        title:"slep",
        description:"slep",
        completed:false
      },
      {
        serialNumber: 3,
        title:"slep",
        description:"slep",
        completed:false
      }
    ]
  }
  ngOnInit(): void {
  }

}
