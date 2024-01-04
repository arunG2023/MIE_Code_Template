import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  // Creating a New User
  createUser(data:any): Observable<any>{
    return this.http.post("http://localhost:5098/api/LoginAndRegister/RegisterNew",data);
  }

  // Login User
  loginUser(data:any): Observable<any>{
    return this.http.post("http://localhost:5098/api/LoginAndRegister/Login",data)
  }

  // Login User for single singON
  loginWithGoogle(credentials: string): Observable<any>{
    const header = new HttpHeaders().set('Content-type','application/json');
    return this.http.post("http://localhost:5098/api/LoginwithGoogle", JSON.stringify(credentials), { headers: header });
    }
}
