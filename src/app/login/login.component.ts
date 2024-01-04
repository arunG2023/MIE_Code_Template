// Google Single Sign On Imports
declare var google:any;
declare var window:any;
import {CredentialResponse,PromptMomentNotification} from 'google-one-tap'

import { Component, OnInit, NgZone } from '@angular/core';
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
  isFormError : boolean = false;

  constructor(private userService: UserServiceService,
              private authService: AuthService, 
              private router: Router,
              private _ngZone:NgZone) { 
    this.login = new FormGroup({
      userName : new FormControl('', [Validators.required,Validators.email]),
      password : new FormControl('', [Validators.required,Validators.minLength(8)])
    })
  }

  loginUser(){
    
  
    if(this.login.valid){
   
      this.userService.loginUser(this.login.value).subscribe(
        res => {
          if(res.token){
            this.isInvalidCredentials = false
            this.authService.storeToken(res.token);
            this.router.navigate(['dashboard'])
          }
        },
        err => {
          this.isInvalidCredentials = true
        }
        );

      // For checking purpose as I can't run .NET
      const res = {
        'message' : 'user logged',
         'token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFydW5rdW1hckBtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwibmJmIjoxNzA0MjYzMDMzLCJleHAiOjE3MDQzNDk0MzMsImlhdCI6MTcwNDI2MzAzM30.m48LyfFCzQqWuIClpqbx60gX2fp4-4G1pcKpK2T8gcg'
      }

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
      this.isFormError = true
    }
  }

  ngOnInit(): void {
    // Implementation of google single sign on
    window.onGoogleLibraryLoad = ()=> {
      google.accounts.id.initialize({
        client_id: '200698853522-5b3nkgrgal38n7eqjqrrt6biinbt46ca.apps.googleusercontent.com',
        callback: this.handleCredentialResponse.bind(this),
        auto_select: false,
        cancel_on_tap_outside: true
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large", width: "100%"}
        );
        google.accounts.id.prompt((notification: PromptMomentNotification)=> {});
      };
  }

  // Method to call handle google single sign on with backend 
  async handleCredentialResponse (response: CredentialResponse){
    debugger
    await this.userService.loginWithGoogle(response.credential).subscribe(
   
      (x:any) => {
        debugger
      localStorage.setItem("token", x.token);
      this._ngZone.run(() => {
         this.router.navigate(['/logout']);
      })},
      (error:any) => {
        debugger
        console.log(error);
        }
        );
      }

}
