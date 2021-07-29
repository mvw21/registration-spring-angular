import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _service : RegistrationService, private _router: Router) { }
  user = new User();
  msg = '';
  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response recieved");
        this._router.navigate(['/loginsuccess'])
      } ,
      error => {
      console.log("exception occured");
      this.msg= "Bad credentials,please enter valid email and password";
    }
      ) 
  }

  goToRegistration(){
    this._router.navigate(['/registration'])
  }

}
