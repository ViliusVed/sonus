import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.scss']
})
export class XyzComponent implements OnInit {

  loginForm = new FormGroup({
    id: new FormControl(''),
    password: new FormControl(''),
  });

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";

  constructor(private auth: AuthService, private router: Router ) { }

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['admin']);
    }
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          this.router.navigate(['admin']);
         },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }

  // hideShowPass() {
  //   this.isText = !this.isText;
  //   this.isText ? this.eyeIcon = " fa-eye" : this.eyeIcon = " fa-eye-slash";
  //   // this.isText ? this.type = 'text' : 'password';
  //   // this.isText ? this.eyeIcon = " fa-eye" : this.eyeIcon = " fa-eye-slash";
  //    this.isText ? this.type = "text" : this.type = "password";
  // }

}
