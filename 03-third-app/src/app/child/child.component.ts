import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  tasks: any[] = []
  show: boolean = true;
  color: string = 'green'
  players = ["vedang", "asis", "tanis"]

  students = [
    {
      id: 1,
      FirstName: "Asis",
      LastName: "Verma"
    },
    {
      id: 2,
      FirstName: "Vedang",
      LastName: "B"
    }
  ]

  id: number = 1
  addTask(val: string) {
    if (val.length != 0) {
      this.tasks.push({ id: this.id++, value: val })
      console.log(this.tasks);
    }
  }

  remove(id: number) {
    for (let index = 0; index < this.tasks.length; index++) {
      if (this.tasks[index].id == id) {
        this.tasks.splice(index, 1)
        console.log(this.tasks);
      }
    }

    if (this.tasks.length == 0) {
      this.id = 1
    }
  }
}
