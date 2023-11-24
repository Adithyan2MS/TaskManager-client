import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { response } from 'express';
import { error, log } from 'console';
import { AppService } from '../../app-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit {

  loginForm : FormGroup|any ;
  submit:boolean=false;
  loginSuccess: boolean | any;
  errorMsg:string | any;
  
  constructor(private formBuilder : FormBuilder, private appService: AppService){}

    ngOnInit():void{

    this.loginForm=this.formBuilder.group({
     username:["",[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
     password:["",[Validators.required,Validators.pattern("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}")]],

   })
 }

 userLogin(){
  console.log(this.loginForm);
  
  this.submit=true;
  if(this.loginForm.invalid){
    this.loginForm.markAllAsTouched();
    console.log(this.submit);
    return;
  }

  const formValues= this.loginForm.getRawValue();
 

  const userData= {
    username: formValues.username,
    password: formValues.password
  }
 
  // console.log(userData);

 const apiUrl="http://localhost:8084/api/v1/auth/login";

 this.appService.postReturn(apiUrl, userData).subscribe((res:any) =>{
  // console.log(res);
  // console.log(res.response);
  
  if(res.status=="True"){
    this.loginSuccess=true;
    this.loginForm.reset();
    
  }
  else{
    this.errorMsg =res.response;
      this.loginSuccess = false;
  }
 })
 
 this.submit=false;
}

}
