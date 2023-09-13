import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms'

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(' '),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // })

  profileForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.log(this.profileForm.value)
  }

  updateForm() {
    this.profileForm.patchValue({
      firstName: 'BanTan',
      address:({
        street:'kalyan',
        zip:'12345'
      })
    }
    )
  }
}
