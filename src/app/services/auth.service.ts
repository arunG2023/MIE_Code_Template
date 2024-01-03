// Service to check whether the user is authenticated

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  // Method to check whether user is logged in 
  isLoggedIn(){
    return !!localStorage.getItem('token')
  }

  // Storing the access token once user is logged in
  storeToken(tokenValue:string){
    localStorage.setItem('token',tokenValue)
  }

  // Deleting the access token once user is logged out
  logOut(){
    localStorage.clear();
    this.router.navigate([''])
  }
}
