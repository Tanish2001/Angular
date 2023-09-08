import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input('xyz') incomingdata:any;
  @Output() outputData = new EventEmitter<string>()
  submit(val:string){
    this.outputData.emit(val)
  }
}
