import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { UserServiceService } from 'app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;

  isInvalidCredentials: boolean = false;

  constructor(private userService: UserServiceService,private authService: AuthService, private router: Router) { 
    this.login = new FormGroup({
      userName : new FormControl('', [Validators.required,Validators.email]),
      password : new FormControl('', [Validators.required,Validators.minLength(8), Validators.maxLength(8)])
    })
  }

  loginUser(){
    // console.log(this.login)
  
    if(this.login.valid){
      // Call login Service
      // console.log(this.login.value)
      // this.userService.loginUser(this.login.value).subscribe((res) => {
        
      //     //Put the below code here
          
      //   })

      const res = {
        'message' : 'user logged',
         'token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFydW5rdW1hckBtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwibmJmIjoxNzA0MjYzMDMzLCJleHAiOjE3MDQzNDk0MzMsImlhdCI6MTcwNDI2MzAzM30.m48LyfFCzQqWuIClpqbx60gX2fp4-4G1pcKpK2T8gcg'
      }

      // Put this code above
      if(res.token){
        this.isInvalidCredentials = false
        this.authService.storeToken(res.token);
        this.router.navigate(['dashboard'])
      }
      else{
        this.isInvalidCredentials = true
      }
    
    }


    else{
      console.log("error")
    }
  }

  ngOnInit(): void {
  }

}
