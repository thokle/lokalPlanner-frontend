import { Component, OnInit } from '@angular/core';
import {RegisteruserService} from '../services/registeruser.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../models/user';
import {Router} from '@angular/router';
import {IndexComponent} from '../index/index.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logninForm: FormGroup;
  constructor(private rs: RegisteruserService, private  fb: FormBuilder, private router: Router ) {
    this.logninForm = this.fb.group({
      username: [],
      password: [],
    });

  }

  ngOnInit() {
  }

  public login() {
    this.rs.login(this.logninForm.get('username').value, this.logninForm.get('password').value).subscribe(rs  => {
     const user: User =  rs;
     console.log(JSON.stringify(user));
  localStorage.setItem('user', JSON.stringify(user));
    this.router.navigateByUrl('/dashboard');
    });
  }
}
