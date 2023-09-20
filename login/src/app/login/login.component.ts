import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  signupUser: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: '',
  };
  loginObj: any = {
    EmailId: '',
    Password: '',
  };
  constructor(private accService: ServiceService, private router: Router) {}
  ngOnInit(): void {
    // //lay du lieu tu local
    // const loaclData = localStorage.getItem('signupUser');
    // //kt neu khac null thi parse
    // if (loaclData != null) {
    //   this.signupUser = JSON.parse(loaclData);
    // }
  }

  onSignUp() {
    this.signupUser.push(this.signupObj);
    localStorage.setItem('signupUser', JSON.stringify(this.signupUser));
    this.signupObj = {
      userName: '',
      email: '',
      password: '',
    };
  }
  onLogin() {
    // const isUserExist = this.signupUser.find(
    //   (m) =>
    //     m.userName == this.loginObj.userName &&
    //     m.password == this.loginObj.password
    // );
    // if (isUserExist != undefined) {
    //   alert('User Login success');
    // } else {
    //   alert('Wrong');
    // }
    this.accService.onLogin(this.loginObj).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('token', res.token);
      this.router.navigateByUrl('/dashboard');
    });
  }
}
