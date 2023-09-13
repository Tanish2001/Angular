import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '08-reactive-forms';
  genders = ["male", "female"]
  userForm!: FormGroup;
  InvalidUserNames=['admin','superuser','yourdad']

  ngOnInit(): void {
    this.userForm=new FormGroup(
      {
        'username':new FormControl(null,[Validators.required,Validators.minLength(5),Validators.pattern('^[a-zA-Z\s]*$'),Validators.maxLength(10),this.invalidNames.bind(this)]),
        'email':new FormControl(null,[Validators.email,Validators.required]),
        'number':new FormControl(null,[Validators.required]),
        'gender':new FormControl(null,Validators.required),
      }
    )
  }

  onSubmit(){
    console.log(this.userForm);
    // this.resetForm()
  }

  resetForm(){
    this.userForm.reset()
  }

  invalidNames(control:FormControl):{[msg:string]:boolean}{
    if(this.InvalidUserNames.includes(control.value)){
      console.log("invalid");
      return {'invalidName':true}
    }
    return {}

  }


}
