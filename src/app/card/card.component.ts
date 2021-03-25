import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  switch:boolean=false
  form:any
  constructor(private formBuilder:FormBuilder) { }

  onBackClick():void{
    this.switch=!this.switch;
  }

  onSubmit():void{
    console.log(this.form.value)
  }

  registerNo(){
    return this.form.get("registerNo");
  }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      registerNo:["",[Validators.required]]
    })
  }

}
