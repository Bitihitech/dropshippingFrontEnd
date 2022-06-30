import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SignIn} from "./model/sign-in";
import {LoginService} from "../login.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {TokenStorageService} from "../token-storage.service";
import {ShareService} from "../../common/service/share.service";

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
              private toastrService:ToastrService,
              private tokenStorageService:TokenStorageService,
              private shareService:ShareService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl('')
    })
    if (this.tokenStorageService.getToken()){
      this.loginService.isLoggedIn = true;
    }

  }

  signIn() {

    this.singInDto = this.signInForm.value;
    console.log("remember me: ")
    console.log(this.rememberMe.value)

    this.loginService.sigIn(this.singInDto).subscribe(value => {
     if (this.rememberMe.value){
       this.tokenStorageService.saveTokenLocal(value.token);
       this.tokenStorageService.saveUserLocal(value)
     }else {
       this.tokenStorageService.saveTokenSession(value.token);
       this.tokenStorageService.saveUserSession(value);
     }
     this.loginService.isLoggedIn = true;
      this.toastrService.success("Login succsess!","Continue!",{
        timeOut:3000,
        positionClass:'toast-top-right',
      });
      this.shareService.sendClickEvent();
      this.router.navigateByUrl("/home");
    }, error => {
      this.toastrService.error("Error","Try again!",{
        timeOut:3000,
        positionClass:'toast-bottom-right',
      })
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
      console.log("SignIn Complete!")
    })
  }

  get userName(){
    return this.signInForm.get('userName');
  }
  get password(){
    return this.signInForm.get('password');
  }

  get rememberMe(){
    return this.signInForm.get('rememberMe');
  }
}
