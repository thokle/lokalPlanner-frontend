import { Component, OnInit } from '@angular/core';
import {RegisteruserService} from '../services/registeruser.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../models/user';
import {Router} from '@angular/router';
import {IndexComponent} from '../index/index.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  inCorrectText = '';
  isInCorrect;
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
    this.isInCorrect = false;
     const user: User =  rs[0];
      console.log(JSON.stringify(user));
     if ( user.username !== undefined) {

       localStorage.setItem('user', JSON.stringify(user));
       this.router.navigateByUrl('/dashboard');
     } else {
        this.inCorrectText = 'Indtastet brugernavn og eller adgangs kode er forkert';
        this.isInCorrect = true;
     }
    });
  }
}
