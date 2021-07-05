import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "This is luminar Bank"
  account = "Account number please"
  accno = ""
  pwdno = ""

  users:any = {
    1000: { acno: 1000, username: "userone", password: "userone", actype: "savings", balance: 5000 },
    1001: { acno: 1001, username: "usertwo", password: "usertwo", actype: "savings", balance: 6000 },
    1002: { acno: 1002, username: "userthree", password: "userthree", actype: "savings", balance: 7000 },
    1003: { acno: 1003, username: "userfour", password: "userfour", actype: "savings", balance: 8000 }

  }

  constructor() { }

  ngOnInit(): void {
  }


  accChange(event: any) {
    this.accno = event.target.value;
    console.log(this.accno);

  }
  pwdChange(event: any) {
    this.pwdno = event.target.value;
    console.log(this.pwdno);
  }

  login() {
    var acno = this.accno;
    var pwd = this.pwdno;
    let accDetails = this.users;

    if (acno in accDetails) {
      if (pwd == accDetails[acno]["password"]) {
        alert("Login successful");

      }
      else {
        alert("incorrect password");

      }
    }
      else {
        alert("invalid account number");
      }
    }







  }





