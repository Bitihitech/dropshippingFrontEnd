import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SignIn} from "./model/sign-in";
import {LoginService} from "../login.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  singInDto: SignIn = {
    userName: '',
    password: '',
    rememberMe: false
  }
  errorUserName: boolean;
  errorPassword: boolean;
  userNameIsBlank: boolean;
  passWordIsBlank: boolean;

  constructor(private loginService: LoginService,
              private snackBar: MatSnackBar,
              private router: Router) {
  }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl('')
    })
  }

  signIn() {

    this.singInDto = this.signInForm.value;
    this.loginService.sigIn(this.singInDto).subscribe(value => {
      console.log(value)
      console.log("SignIn success!")
      this.snackBar.open("SignIin success", "Oke");

      this.router.navigateByUrl("/home");
      sessionStorage.setItem("token",value.token)
      sessionStorage.setItem("username",value.name)
      sessionStorage.setItem("roles",value.authorities)

      localStorage.setItem("token",value.token);


      const token = localStorage.getItem("token");
      console.log(token);
    }, error => {
      console.log(error);

      // if ((typeof error.error.details.password) == 'string') {
      //   let errorDetail = error.error.details;
      //   this.passWordIsBlank = errorDetail.password.includes('password') ? true : false;
      //
      //   console.log(error.error.details.password)
      //
      // } else {
      //   this.passWordIsBlank = false;
      // }
      // if ((typeof error.error.details.userName) == 'string') {
      //   let errorDetail = error.error.details;
      //   this.userNameIsBlank = errorDetail.userName.includes('userName') ? true : false;
      // } else {
      //   this.userNameIsBlank = false;
      //   console.log(error.error.details.userName)
      // }


      if ((typeof error.error.status) == 'string') {
        let er = error?.error.status;
        this.errorUserName = er.includes('Username ') ? true : false;
        this.errorPassword = er.includes('password') ? true : false;
        console.log(er)
      } else {
        this.errorUserName = false;
        this.errorPassword = false;

      }

    }, () => {
      console.log("Complete!")
    })
  }

  get userName(){
    return this.signInForm.get('userName');
  }
  get password(){
    return this.signInForm.get('password');
  }
}
