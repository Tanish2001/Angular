import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = '02-second-App';
  imgURL = "https://source.unsplash.com/random/500x300/?dog"
  count=0;
  classname:any;
  message:any;
  content:any;
  value:any;
  DisplayUsername:any;
  username:any;
  text1:any;
  inputText:any;
  ngOnInit(): void {
        const firstTimmer = setInterval(() => {
          //this.imgURL="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          this.imgURL = "https://source.unsplash.com/random/500x300/?car,super"
        }, 2000);

        const secondTimer =  setInterval(() => {
          // this.imgURL="https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=440&h=220&q=60"
          this.imgURL = "https://source.unsplash.com/random/500x300/?cat"
          // clearTimeout(firstTimmer)
        }, 3000);
        
          if(this.count%2==0){
            firstTimmer
          }
          else{
            secondTimer
          }
          this.count++
      }

      printPrimary(){
        this.message = "Clicked Primary Btn"
        this.classname = "bg bg-primary"
      }

      printDanger(){
        this.message="clicked danger"
        this.classname = "bg bg-danger"
      }

      printGreen(){
        this.message="clicked warning"
        this.classname = "bg bg-warning"
      }

      submit(val:string){
        this.content=val
      }

      submitName(val:string){
        this.DisplayUsername=val
      }

      checkUserNameLength():boolean{
        return this.text1.length==0
      }

      updateOnEvent(event:Event){
        // console.log(event);
        this.inputText=(<HTMLInputElement>event.target).value;
      }

  }
  


