import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RegisteruserService} from '../services/registeruser.service';
import {User} from '../models/user';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  userForm: FormGroup;
  constructor(private  fb: FormBuilder, private rs: RegisteruserService) {
    this.userForm = fb.group({
      firstname: [],
      lastname: [],
      jobfunction: [],
      username: [],
      email: [],
      password: [],
      repassword : [],
      title: [],
    });
  }

  ngOnInit() {
  }

  public createUser() {
    const user: User = {username: this.userForm.get('username').value
      , email: this.userForm.get('firstname').value
      , password: this.userForm.get('password').value
      , firstname: this.userForm.get('firstname').value ,
      lastname: this.userForm.get('lastname').value ,
      jobfunction: this.userForm.get('jobfunction').value};
    this.rs.creteUser(user).subscribe( value => {

    }, error1 => {

    });

  }

}
