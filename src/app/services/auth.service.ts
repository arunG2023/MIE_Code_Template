// Service to check whether the user is authenticated

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Method to check whether user is logged in -- TEST
  isLoggedIn(){
    return !!localStorage.getItem('token')
  }

  storeToken(tokenValue:string){
    localStorage.setItem('token',tokenValue)
  }
}
