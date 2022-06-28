import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_USER = "http://localhost:8080/api/user/";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  register(signUpForm: any): Observable<any> {
    const header = {'content-type': 'application/json'};
    return this.http.post(API_USER + "signUp", signUpForm, {headers: header})
  }

  getNational(): Observable<any> {
    return this.http.get(API_USER + "nationality");
  }

  sigIn(signInForm: any): Observable<any> {
    return this.http.post(API_USER + "signIn", signInForm);
  }
}
