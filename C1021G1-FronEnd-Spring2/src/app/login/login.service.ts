import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const API_USER = "http://localhost:8080/api/user/";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions:any;
  isLoggedIn: boolean;
  constructor(private http:HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }

  sigIn(signInForm:any):Observable<any>{
    return this.http.post(API_USER + "signIn", signInForm,this.httpOptions);

  }

  register(signUpForm: any): Observable<any> {
    return this.http.post(API_USER + "signUp", signUpForm, this.httpOptions)
  }

  getNational(): Observable<any> {
    return this.http.get(API_USER + "nationality");
  }


}
