import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-user-forms',
  templateUrl: './user-forms.component.html',
  styleUrls: ['./user-forms.component.css']
})
export class UserFormsComponent {
  border: string = ''
  email:any=''
  @Output() data = new EventEmitter<any>()
  emailRef = document.querySelector("emailField")
  onSubmit(forms: NgForm) {
    console.log(forms);
    console.log({email:forms.form.value.email,option:forms.form.value.option,username:forms.form.value.userName});
    this.data.emit({email:forms.form.value.email,option:forms.form.value.option,username:forms.form.value.userName})
  }
}
