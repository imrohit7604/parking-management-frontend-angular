import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomEmailValidator } from '../common/CustomVaildator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private customValidator: CustomEmailValidator) { }

  signUpForm:any

  ngOnInit(): void {
    this.signUpForm=this.formBuilder.group({
      name:["",[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      email:["",[Validators.required,Validators.email],[this.customValidator.existingEmailValidator()]],
      password:["",[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      confirmPassword:["",[Validators.required]],
      typeOfUser:["",[Validators.required]]
    },{  validator: this.customValidator.vaildateConfirmPassword('password', 'confirmPassword')})
  }

 
  
    name():AbstractControl|null
    {
      return this.signUpForm.get("name");
    }
    email():AbstractControl|null
    {
      return this.signUpForm.get("email");
    }
    password():AbstractControl|null
    {
      return this.signUpForm.get("password");
    }
    confirmPassword():AbstractControl|null
    {
      return this.signUpForm.get("confirmPassword");
    }
    typeOfUser():AbstractControl|null
    {
      return this.signUpForm.get("typeOfUser");
    }

    onSubmit():void{
  
     console.log(this.signUpForm.value);
    }
}
