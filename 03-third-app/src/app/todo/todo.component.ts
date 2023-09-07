import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
tasks:any[]=[]
completedTask:any[]=[]
id: number = 1
addTask(val: string) {
  if (!this.isValueEmpty(val)) {
    this.tasks.push({ id: this.id++, value: val })
    console.log(this.tasks);
  }
}

complete(id:number){
  for (let index = 0; index < this.tasks.length; index++) {
    if(this.tasks[index].id==id){
      this.completedTask.push(this.tasks[index])
      this.tasks.splice(index,1)
    }    
  }
}

deleteTask(id:number){
  for (let index = 0; index < this.tasks.length; index++) {
    if(this.tasks[index].id==id){
      this.tasks.splice(index,1)
    }    
  }
}

deleteTaskFromComplete(id:number){
  for (let index = 0; index < this.completedTask.length; index++) {
    if(this.completedTask[index].id==id){
      this.completedTask.splice(index,1)
    }    
  }
}

isValueEmpty(str:string) {
  return (!str || str.length === 0 );
}

}
