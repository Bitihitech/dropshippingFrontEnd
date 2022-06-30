import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserDto} from "./model/user-dto";
import {User} from "./model/user";
import {Nationality} from "./model/nationality";
import {LoginService} from "../login.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  userDto: UserDto = {
    userName: '',
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    phone: '',
    countryId: 0,
  };
  user: User;
  userNameExist: boolean;
  phoneExist: boolean;
  emailExist: boolean;
  nationalityNotExist: boolean;

  nationalList: Nationality[];

  constructor(private userService: LoginService,
              private toast:ToastrService,
              private router: Router,

  ) {
  }

  ngOnInit(): void {


    function comparePassword(passWord: AbstractControl) {
      const checkPass = passWord.value;
      // console.log(checkPass.passWord)
      // console.log(checkPass.passWordConfig)
      // console.log(checkPass.passWord === checkPass.passWordConfig)
      if (checkPass.passWord === checkPass.passWordConfig) {
        return null;
      }
      // console.log('passwordnotmatch')
      return {'passwordnotmatch': true};
    }


    this.signUpForm = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$'),
      ]),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),

      passWordGroup: new FormGroup({
        passWord: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
        passWordConfig: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      }, comparePassword),
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.email]),
      phone: new FormControl('', Validators.required),
      countryId: new FormControl('', Validators.required),
    })

    //Get nationality list
    this.getAllNationality();

  }

  signUp() {
    // console.log("user")
    // console.log(this.userDto);
    // console.log("----------")

    this.userDto.userName = this.signUpForm.get("userName").value;
    this.userDto.firstName = this.signUpForm.get("firstName").value;
    this.userDto.lastName = this.signUpForm.get("lastName").value;
    this.userDto.password = this.passWord.value;
    this.userDto.email = this.signUpForm.get("email").value;
    this.userDto.phone = this.signUpForm.get("phone").value;
    this.userDto.countryId = this.signUpForm.get("countryId").value;

    console.log(this.userDto.countryId)

    this.userService.register(this.userDto).subscribe(value => {
      console.log(value);
      this.toast.warning("Create user successfully!","Success :",{
        timeOut:3000,
        positionClass:'toast-top-right',
      })
    }, error => {
      this.toast.warning(
        "Can't create user. Please try again!",
        "Error:",{
        timeOut:3000,
        positionClass:'toast-bottom-right',
      })
      if ((typeof error.error.details.error) == 'string') {
        let er = error?.error.details.error;
        this.phoneExist = er.includes('phone') ? true : false;
        this.emailExist = er.includes('email') ? true : false;
        this.userNameExist = er.includes('userName') ? true : false;
        this.nationalityNotExist = er.includes('userName') ? true : false;
      } else {
        this.phoneExist = false;
        this.emailExist = false;
        this.userNameExist = false;
        this.nationalityNotExist = false;
      }
      console.log(error)
      console.log("Detail" + (error.error.details.error))
      console.log("message" + error.message)
    }, () => {
      console.log("Create new User success!")
      this.router.navigateByUrl("/home")
    })
  }

  getAllNationality() {
    this.userService.getNational().subscribe(value => {
      this.nationalList = value;
      console.log(typeof this.nationalList)
    }, error => {
      console.log(error)
    }, () => {
      console.log("Get nationalist success!")
    })
  }

  get passWordGroup() {
    return this.signUpForm.get("passWordGroup");
  }

  get passWordConfig() {
    return this.passWordGroup.get("passWordConfig");
  }

  get passWord() {
    return this.passWordGroup.get("passWord");
  }

}
