import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { 
    
  }

  loginForm:any;
 

  email():AbstractControl|null{
    return this.loginForm.get("email")
  }
  password():AbstractControl|null{
    return this.loginForm.get("password")
  }

  onSubmit():void{
    console.log(this.loginForm.value)
  }
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
    
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required]],
      
    })
  }

}
