import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'; 

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  citynames: any = ['Nagpur', 'Mumbai', 'Pune', 'Delhi'];
  countryNames:any = ['India','UK','USA','Itly','Spain'];

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
       name: ['', Validators.required],
       email: ['', [Validators.required, Validators.email]],
       age: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      gender: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required]
      });
  }
 // convenience getter for easy access to form fields
 get f() { return this.registerForm.controls; }

  submitForm(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
  }  
  console.log(this.registerForm.value);
  }

  changeCity(e) {
    this.registerForm.get('city').setValue(e.target.value, {
       onlySelf: true
    })
  }
 

}
